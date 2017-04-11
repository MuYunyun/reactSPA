/**
 * @ignore
 * DateTimeFormat for
 * Inspired by DateTimeFormat from JDK.
 * @author yiminghe@gmail.com
 */

'use strict';

var GregorianCalendar = require('gregorian-calendar');
var enUsLocale = require('./locale/en_US');
var MAX_VALUE = Number.MAX_VALUE;
var warning = require('warning');

/**
 * date or time style enum
 * @enum {Number} Date.Formatter.Style
 */
var DateTimeStyle = {
  /**
   * full style
   */
  FULL: 0,
  /**
   * long style
   */
  LONG: 1,
  /**
   * medium style
   */
  MEDIUM: 2,
  /**
   * short style
   */
  SHORT: 3
};

/*
 Letter    Date or Time Component    Presentation    Examples
 G    Era designator    Text    AD
 y    Year    Year    1996; 96
 Y    WeekYear    WeekYear    1996; 96
 M    Month in year    Month    July; Jul; 07
 w    Week in year    Number    27
 W    Week in month    Number    2
 D    Day in year    Number    189
 d    Day in month    Number    10
 F    Day of week in month    Number    2
 E    Day in week    Text    Tuesday; Tue
 a    Am/pm marker    Text    PM
 H    Hour in day (0-23)    Number    0
 k    Hour in day (1-24)    Number    24
 K    Hour in am/pm (0-11)    Number    0
 h    Hour in am/pm (1-12)    Number    12
 m    Minute in hour    Number    30
 s    Second in minute    Number    55
 S    Millisecond    Number    978
 x z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
 Z    Time zone    RFC 822 time zone    -0800
 */

var patternChars = new Array(GregorianCalendar.DAY_OF_WEEK_IN_MONTH + 2).join('1');
var ERA = 0;
var calendarIndexMap = {};

patternChars = patternChars.split('');
patternChars[ERA] = 'G';
patternChars[GregorianCalendar.YEAR] = 'y';
patternChars[GregorianCalendar.MONTH] = 'M';
patternChars[GregorianCalendar.DAY_OF_MONTH] = 'd';
patternChars[GregorianCalendar.HOUR_OF_DAY] = 'H';
patternChars[GregorianCalendar.MINUTES] = 'm';
patternChars[GregorianCalendar.SECONDS] = 's';
patternChars[GregorianCalendar.MILLISECONDS] = 'S';
patternChars[GregorianCalendar.WEEK_OF_YEAR] = 'w';
patternChars[GregorianCalendar.WEEK_OF_MONTH] = 'W';
patternChars[GregorianCalendar.DAY_OF_YEAR] = 'D';
patternChars[GregorianCalendar.DAY_OF_WEEK_IN_MONTH] = 'F';
patternChars.push('Y');

patternChars.forEach(function (v, key) {
  var k = key;
  if (v === 'Y') {
    k = GregorianCalendar.YEAR;
  }
  if (v) {
    calendarIndexMap[v] = k;
  }
});

function mix(t, s) {
  for (var p in s) {
    if (s.hasOwnProperty(p)) {
      t[p] = s[p];
    }
  }
}

var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
var EMPTY = '';

function substitute(str, o, regexp) {
  if (typeof str !== 'string' || !o) {
    return str;
  }

  return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
    if (match.charAt(0) === '\\') {
      return match.slice(1);
    }
    return o[name] === undefined ? EMPTY : o[name];
  });
}

patternChars = patternChars.join('') + 'ahkKZE';

function encode(lastField, count, compiledPattern) {
  compiledPattern.push({
    field: lastField,
    count: count
  });
}

function compile(pattern) {
  var length = pattern.length;
  var inQuote = false;
  var compiledPattern = [];
  var tmpBuffer = null;
  var count = 0;
  var lastField = -1;

  for (var i = 0; i < length; i++) {
    var c = pattern.charAt(i);

    if (c === '\'') {
      // '' is treated as a single quote regardless of being
      // in a quoted section.
      if (i + 1 < length) {
        c = pattern.charAt(i + 1);
        if (c === '\'') {
          i++;
          if (count !== 0) {
            encode(lastField, count, compiledPattern);
            lastField = -1;
            count = 0;
          }
          if (inQuote) {
            tmpBuffer += c;
          }
          continue;
        }
      }
      if (!inQuote) {
        if (count !== 0) {
          encode(lastField, count, compiledPattern);
          lastField = -1;
          count = 0;
        }
        tmpBuffer = '';
        inQuote = true;
      } else {
        compiledPattern.push({
          text: tmpBuffer
        });
        inQuote = false;
      }
      continue;
    }
    if (inQuote) {
      tmpBuffer += c;
      continue;
    }
    if (!(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')) {
      if (count !== 0) {
        encode(lastField, count, compiledPattern);
        lastField = -1;
        count = 0;
      }
      compiledPattern.push({
        text: c
      });
      continue;
    }

    if (patternChars.indexOf(c) === -1) {
      throw new Error('Illegal pattern character "' + c + '"');
    }

    if (lastField === -1 || lastField === c) {
      lastField = c;
      count++;
      continue;
    }
    encode(lastField, count, compiledPattern);
    lastField = c;
    count = 1;
  }

  if (inQuote) {
    throw new Error('Unterminated quote');
  }

  if (count !== 0) {
    encode(lastField, count, compiledPattern);
  }

  return compiledPattern;
}

var zeroDigit = '0';

// TODO zeroDigit localization??
function zeroPaddingNumber(_x, _x2, _x3, _x4) {
  var _again = true;

  _function: while (_again) {
    var value = _x,
        minDigits = _x2,
        maxDigits_ = _x3,
        b = _x4;
    _again = false;

    // Optimization for 1, 2 and 4 digit numbers. This should
    // cover most cases of formatting date/time related items.
    // Note: This optimization code assumes that maxDigits is
    // either 2 or Integer.MAX_VALUE (maxIntCount in format()).
    var buffer = b || [];
    var maxDigits = maxDigits_ || MAX_VALUE;
    if (value >= 0) {
      if (value < 100 && minDigits >= 1 && minDigits <= 2) {
        if (value < 10 && minDigits === 2) {
          buffer.push(zeroDigit);
        }
        buffer.push(value);
        return buffer.join('');
      } else if (value >= 1000 && value < 10000) {
        if (minDigits === 4) {
          buffer.push(value);
          return buffer.join('');
        }
        if (minDigits === 2 && maxDigits === 2) {
          _x = value % 100;
          _x2 = 2;
          _x3 = 2;
          _x4 = buffer;
          _again = true;
          buffer = maxDigits = undefined;
          continue _function;
        }
      }
    }
    buffer.push(value + '');
    return buffer.join('');
  }
}

/**
 *
 * date time formatter for GregorianCalendar
 *
 *      @example
 *
 *          const calendar = new GregorianCalendar(2013,9,24);
 *          // ' to escape
 *          const formatter = new GregorianCalendarFormat("'today is' ''yyyy/MM/dd a''");
 *          document.write(formatter.format(calendar));
 *
 * @class GregorianCalendarFormat
 * @param {String} pattern patter string of date formatter
 *
 * <table border="1">
 * <thead valign="bottom">
 * <tr><th class="head">Letter</th>
 * <th class="head">Date or Time Component</th>
 * <th class="head">Presentation</th>
 * <th class="head">Examples</th>
 * </tr>
 * </thead>
 * <tbody valign="top">
 * <tr><td>G</td>
 * <td>Era designator</td>
 * <td>Text</td>
 * <td>AD</td>
 * </tr>
 * <tr><td>y</td>
 * <td>Year</td>
 * <td>Year</td>
 * <td>1996; 96</td>
 * </tr>
 * <tr><td>M</td>
 * <td>Month in year</td>
 * <td>Month</td>
 * <td>July; Jul; 07</td>
 * </tr>
 * <tr><td>w</td>
 * <td>Week in year</td>
 * <td>Number</td>
 * <td>27</td>
 * </tr>
 * <tr><td>W</td>
 * <td>Week in month</td>
 * <td>Number</td>
 * <td>2</td>
 * </tr>
 * <tr><td>D</td>
 * <td>Day in year</td>
 * <td>Number</td>
 * <td>189</td>
 * </tr>
 * <tr><td>d</td>
 * <td>Day in month</td>
 * <td>Number</td>
 * <td>10</td>
 * </tr>
 * <tr><td>F</td>
 * <td>Day of week in month</td>
 * <td>Number</td>
 * <td>2</td>
 * </tr>
 * <tr><td>E</td>
 * <td>Day in week</td>
 * <td>Text</td>
 * <td>Tuesday; Tue</td>
 * </tr>
 * <tr><td>a</td>
 * <td>Am/pm marker</td>
 * <td>Text</td>
 * <td>PM</td>
 * </tr>
 * <tr><td>H</td>
 *       <td>Hour in day (0-23)</td>
 * <td>Number</td>
 * <td>0</td>
 * </tr>
 * <tr><td>k</td>
 *       <td>Hour in day (1-24)</td>
 * <td>Number</td>
 * <td>24</td>
 * </tr>
 * <tr><td>K</td>
 * <td>Hour in am/pm (0-11)</td>
 * <td>Number</td>
 * <td>0</td>
 * </tr>
 * <tr><td>h</td>
 * <td>Hour in am/pm (1-12)</td>
 * <td>Number</td>
 * <td>12</td>
 * </tr>
 * <tr><td>m</td>
 * <td>Minute in hour</td>
 * <td>Number</td>
 * <td>30</td>
 * </tr>
 * <tr><td>s</td>
 * <td>Second in minute</td>
 * <td>Number</td>
 * <td>55</td>
 * </tr>
 * <tr><td>S</td>
 * <td>Millisecond</td>
 * <td>Number</td>
 * <td>978</td>
 * </tr>
 * <tr><td>x/z</td>
 * <td>Time zone</td>
 * <td>General time zone</td>
 * <td>Pacific Standard Time; PST; GMT-08:00</td>
 * </tr>
 * <tr><td>Z</td>
 * <td>Time zone</td>
 * <td>RFC 822 time zone</td>
 * <td>-0800</td>
 * </tr>
 * </tbody>
 * </table>

 * @param {Object} locale format locale
 */
function DateTimeFormat(pattern, locale) {
  this.locale = locale || enUsLocale;
  this.originalPattern = pattern;
  this.pattern = compile(pattern);
}

function formatField(field, count, locale, calendar) {
  var current = undefined;
  var value = undefined;
  switch (field) {
    case 'G':
      value = calendar.getYear() > 0 ? 1 : 0;
      current = locale.eras[value];
      break;
    case 'Y':
      value = calendar.getWeekYear();
      if (value <= 0) {
        value = 1 - value;
      }
      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
      break;
    case 'y':
      value = calendar.getYear();
      if (value <= 0) {
        value = 1 - value;
      }
      current = zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2);
      break;
    case 'M':
      value = calendar.getMonth();
      if (count >= 4) {
        current = locale.months[value];
      } else if (count === 3) {
        current = locale.shortMonths[value];
      } else {
        current = zeroPaddingNumber(value + 1, count);
      }
      break;
    case 'k':
      current = zeroPaddingNumber(calendar.getHourOfDay() || 24, count);
      break;
    case 'E':
      value = calendar.getDayOfWeek();
      current = count >= 4 ? locale.weekdays[value] : locale.shortWeekdays[value];
      break;
    case 'a':
      current = locale.ampms[calendar.getHourOfDay() >= 12 ? 1 : 0];
      break;
    case 'h':
      current = zeroPaddingNumber(calendar.getHourOfDay() % 12 || 12, count);
      break;
    case 'K':
      current = zeroPaddingNumber(calendar.getHourOfDay() % 12, count);
      break;
    case 'Z':
      var offset = calendar.getTimezoneOffset();
      var parts = [offset < 0 ? '-' : '+'];
      offset = Math.abs(offset);
      parts.push(zeroPaddingNumber(Math.floor(offset / 60) % 100, 2), zeroPaddingNumber(offset % 60, 2));
      current = parts.join('');
      break;
    default:
      // case 'd':
      // case 'H':
      // case 'm':
      // case 's':
      // case 'S':
      // case 'D':
      // case 'F':
      // case 'w':
      // case 'W':
      var index = calendarIndexMap[field];
      value = calendar.get(index);
      current = zeroPaddingNumber(value, count);
  }
  return current;
}

function matchPartString(dateStr, startIndex, match, mLen) {
  for (var i = 0; i < mLen; i++) {
    if (dateStr.charAt(startIndex + i) !== match.charAt(i)) {
      return false;
    }
  }
  return true;
}

function matchField(dateStr, startIndex, matches) {
  var matchedLen = -1;
  var index = -1;
  var i = undefined;
  var len = matches.length;
  for (i = 0; i < len; i++) {
    var m = matches[i];
    var mLen = m.length;
    if (mLen > matchedLen && matchPartString(dateStr, startIndex, m, mLen)) {
      matchedLen = mLen;
      index = i;
    }
  }
  return index >= 0 ? {
    value: index,
    startIndex: startIndex + matchedLen
  } : null;
}

function getLeadingNumberLen(str) {
  var i = undefined;
  var c = undefined;
  var len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charAt(i);
    if (c < '0' || c > '9') {
      break;
    }
  }
  return i;
}

function matchNumber(dateStr, startIndex, count, obeyCount) {
  var str = dateStr;
  var n = undefined;
  if (obeyCount) {
    if (dateStr.length < startIndex + count) {
      return null;
    }
    str = dateStr.slice(startIndex, startIndex + count);
    if (!str.match(/^\d+$/)) {
      throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
    }
  } else {
    str = str.slice(startIndex);
  }
  n = parseInt(str, 10);
  if (isNaN(n)) {
    throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + this.originalPattern);
  }
  return {
    value: n,
    startIndex: startIndex + getLeadingNumberLen(str)
  };
}

function parseField(calendar, dateStr, startIndex_, field, count, obeyCount, tmp) {
  var match = undefined;
  var year = undefined;
  var hour = undefined;
  var startIndex = startIndex_;
  if (dateStr.length <= startIndex) {
    return startIndex;
  }
  var locale = this.locale;
  switch (field) {
    case 'G':
      match = matchField(dateStr, startIndex, locale.eras);
      if (match) {
        if (calendar.isSetYear()) {
          if (match.value === 0) {
            year = calendar.getYear();
            calendar.setYear(1 - year);
          }
        } else {
          tmp.era = match.value;
        }
      }
      break;
    case 'y':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        year = match.value;
        if ('era' in tmp) {
          if (tmp.era === 0) {
            year = 1 - year;
          }
        }
        calendar.setYear(year);
      }
      break;
    case 'M':
      var month = undefined;
      if (count >= 3) {
        match = matchField(dateStr, startIndex, locale[count === 3 ? 'shortMonths' : 'months']);
        if (match) {
          month = match.value;
        }
      } else {
        match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
        if (match) {
          month = match.value - 1;
        }
      }
      if (match) {
        calendar.setMonth(month);
      }
      break;
    case 'k':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        calendar.setHourOfDay(match.value % 24);
      }
      break;
    case 'E':
      match = matchField(dateStr, startIndex, locale[count > 3 ? 'weekdays' : 'shortWeekdays']);
      if (match) {
        calendar.setDayOfWeek(match.value);
      }
      break;
    case 'a':
      match = matchField(dateStr, startIndex, locale.ampms);
      if (match) {
        if (calendar.isSetHourOfDay()) {
          if (match.value) {
            hour = calendar.getHourOfDay();
            if (hour < 12) {
              calendar.setHourOfDay((hour + 12) % 24);
            }
          }
        } else {
          tmp.ampm = match.value;
        }
      }
      break;
    case 'h':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        hour = match.value %= 12;
        if (tmp.ampm) {
          hour += 12;
        }
        calendar.setHourOfDay(hour);
      }
      break;
    case 'K':
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        hour = match.value;
        if (tmp.ampm) {
          hour += 12;
        }
        calendar.setHourOfDay(hour);
      }
      break;
    case 'Z':
      // let sign = 1;
      var zoneChar = dateStr.charAt(startIndex);
      if (zoneChar === '-') {
        // sign = -1;
        startIndex++;
      } else if (zoneChar === '+') {
        startIndex++;
      } else {
        break;
      }
      match = matchNumber.call(this, dateStr, startIndex, 2, true);
      if (match) {
        var zoneOffset = match.value * 60;
        startIndex = match.startIndex;
        match = matchNumber.call(this, dateStr, startIndex, 2, true);
        if (match) {
          zoneOffset += match.value;
        }
        calendar.setTimezoneOffset(zoneOffset);
      }
      break;
    default:
      // case 'd':
      // case 'H':
      // case 'm':
      // case 's':
      // case 'S':
      // case 'D':
      // case 'F':
      // case 'w':
      // case 'W'
      match = matchNumber.call(this, dateStr, startIndex, count, obeyCount);
      if (match) {
        var index = calendarIndexMap[field];
        calendar.set(index, match.value);
      }
  }
  if (match) {
    startIndex = match.startIndex;
  }
  return startIndex;
}

mix(DateTimeFormat.prototype, {
  /*
   * format a GregorianDate instance according to specified pattern
   * @param {GregorianCalendar} calendar GregorianDate instance
   * @returns {string} formatted string of GregorianDate instance
   */
  format: function format(calendar) {
    if (!calendar.isGregorianCalendar) {
      throw new Error('calendar must be type of GregorianCalendar');
    }
    var i = undefined;
    var ret = [];
    var pattern = this.pattern;
    var len = pattern.length;
    for (i = 0; i < len; i++) {
      var comp = pattern[i];
      if (comp.text) {
        ret.push(comp.text);
      } else if ('field' in comp) {
        ret.push(formatField(comp.field, comp.count, this.locale, calendar));
      }
    }
    return ret.join('');
  },

  /*
   * parse a formatted string of GregorianDate instance according to specified pattern
   * @param {String} dateStr formatted string of GregorianDate
   * @returns {GregorianCalendar}
   */
  parse: function parse(dateStr, option_) {
    var option = option_ || {};
    var calendarLocale = option.locale;
    var calendar = new GregorianCalendar(calendarLocale);
    var i = undefined;
    var j = undefined;
    var tmp = {};
    var obeyCount = option.obeyCount || false;
    var dateStrLen = dateStr.length;
    var errorIndex = -1;
    var startIndex = 0;
    var oldStartIndex = 0;
    var pattern = this.pattern;
    var len = pattern.length;
    /* eslint no-labels: 0 no-empty-label:0 */
    loopPattern: {
      for (i = 0; errorIndex < 0 && i < len; i++) {
        var comp = pattern[i];
        var text = undefined;
        var textLen = undefined;
        oldStartIndex = startIndex;
        text = comp.text;
        if (text) {
          textLen = text.length;
          if (textLen + startIndex > dateStrLen) {
            errorIndex = startIndex;
          } else {
            for (j = 0; j < textLen; j++) {
              if (text.charAt(j) !== dateStr.charAt(j + startIndex)) {
                errorIndex = startIndex;
                break loopPattern;
              }
            }
            startIndex += textLen;
          }
        } else if ('field' in comp) {
          if (!option.obeyCount) {
            var nextComp = pattern[i + 1];
            obeyCount = false;
            if (nextComp) {
              if ('field' in nextComp) {
                obeyCount = true;
              } else {
                var c = nextComp.text.charAt(0);
                if (c >= '0' && c <= '9') {
                  obeyCount = true;
                }
              }
            }
          }
          startIndex = parseField.call(this, calendar, dateStr, startIndex, comp.field, comp.count, obeyCount, tmp);
          if (startIndex === oldStartIndex) {
            errorIndex = startIndex;
          }
        }
      }
    }

    if (errorIndex >= 0) {
      warning(false, 'error when parsing date: ' + dateStr + ', position: ' + dateStr.slice(0, errorIndex) + '^');
      return undefined;
    }
    return calendar;
  }
});

mix(DateTimeFormat, {
  Style: DateTimeStyle,

  /*
   * get a formatter instance of short style pattern.
   * en-us: M/d/yy h:mm a
   * zh-cn: yy-M-d ah:mm
   * @param {Object} locale locale object
   * @returns {GregorianCalendar}
   * @static
   */
  getInstance: function getInstance(locale) {
    return this.getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale);
  },

  /*
   * get a formatter instance of specified date style.
   * @param {Date.Formatter.Style} dateStyle date format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getDateInstance: function getDateInstance(dateStyle, locale) {
    return this.getDateTimeInstance(dateStyle, undefined, locale);
  },

  /*
   * get a formatter instance of specified date style and time style.
   * @param {Date.Formatter.Style} dateStyle date format style
   * @param {Date.Formatter.Style} timeStyle time format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getDateTimeInstance: function getDateTimeInstance(dateStyle, timeStyle, locale_) {
    var locale = locale_ || enUsLocale;
    var datePattern = '';
    if (dateStyle !== undefined) {
      datePattern = locale.datePatterns[dateStyle];
    }
    var timePattern = '';
    if (timeStyle !== undefined) {
      timePattern = locale.timePatterns[timeStyle];
    }
    var pattern = datePattern;
    if (timePattern) {
      if (datePattern) {
        pattern = substitute(locale.dateTimePattern, {
          date: datePattern,
          time: timePattern
        });
      } else {
        pattern = timePattern;
      }
    }
    return new DateTimeFormat(pattern, locale);
  },

  /*
   * get a formatter instance of specified time style.
   * @param {Date.Formatter.Style} timeStyle time format style
   * @param {Object} locale
   * @returns {GregorianCalendar}
   * @static
   */
  getTimeInstance: function getTimeInstance(timeStyle, locale) {
    return this.getDateTimeInstance(undefined, timeStyle, locale);
  }
});

module.exports = DateTimeFormat;

DateTimeFormat.version = '@VERSION@';

// gc_format@163.com