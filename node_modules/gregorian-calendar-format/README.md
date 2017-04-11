# gregorian-calendar-format
---

format [gregorian-calendar](https://github.com/yiminghe/gregorian-calendar) instance

[![gregorian-calendar-format](https://nodei.co/npm/gregorian-calendar-format.png)](https://npmjs.org/package/gregorian-calendar-format)
[![NPM downloads](http://img.shields.io/npm/dm/gregorian-calendar-format.svg)](https://npmjs.org/package/gregorian-calendar-format)
[![Build Status](https://secure.travis-ci.org/yiminghe/gregorian-calendar-format.png?branch=master)](https://travis-ci.org/yiminghe/gregorian-calendar-format)
[![Coverage Status](https://img.shields.io/coveralls/yiminghe/gregorian-calendar-format.svg)](https://coveralls.io/r/yiminghe/gregorian-calendar-format?branch=master)
[![Dependency Status](https://gemnasium.com/yiminghe/gregorian-calendar-format.png)](https://gemnasium.com/yiminghe/gregorian-calendar-format)
[![node version](https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square)](http://nodejs.org/download/)


## use on node

```js
var GregorianCalendarFormat = require('gregorian-calendar-format');
var GregorianCalendar = require('gregorian-calendar');
var gregorianCalendar = new GregorianCalendar();
gregorianCalendar.set(2013, GregorianCalendar.JULY, 9);
var df = new GregorianCalendarFormat('yyyy-MM-dd');
console.log(df.format(gregorianCalendar));
df = new GregorianCalendarFormat('yy-MM-dd');
console.log(df.format(gregorianCalendar));
```

## API

### Constructor GregorianCalendarFormat(pattern: String, locale: Object)

* pattern: pattern string used to format or parse

<table border="1">
    <thead valign="bottom">
        <tr>
            <th class="head">Letter</th>
            <th class="head">Date or Time Component</th>
            <th class="head">Presentation</th>
            <th class="head">Examples</th>
        </tr>
    </thead>
    <tbody valign="top">
        <tr>
            <td>G</td>
            <td>Era designator</td>
            <td>Text</td>
            <td>AD</td>
        </tr>
        <tr>
            <td>y</td>
            <td>Year</td>
            <td>Year</td>
            <td>1996; 96</td>
        </tr>
        <tr>
            <td>Y</td>
            <td>WeekYear</td>
            <td>WeekYear</td>
            <td>1996; 96</td>
        </tr>
        <tr>
            <td>M</td>
            <td>Month in year</td>
            <td>Month</td>
            <td>number of M matter. such as: MM:01 MMM:Jan MMMM: January</td>
        </tr>
        <tr>
            <td>w</td>
            <td>Week in year</td>
            <td>Number</td>
            <td>27</td>
        </tr>
        <tr>
            <td>W</td>
            <td>Week in month</td>
            <td>Number</td>
            <td>2</td>
        </tr>
        <tr>
            <td>D</td>
            <td>Day in year</td>
            <td>Number</td>
            <td>189</td>
        </tr>
        <tr>
            <td>d</td>
            <td>Day in month</td>
            <td>Number</td>
            <td>10</td>
        </tr>
        <tr>
            <td>F</td>
            <td>Day of week in month</td>
            <td>Number</td>
            <td>2</td>
        </tr>
        <tr>
            <td>E</td>
            <td>Day in week</td>
            <td>Text</td>
            <td>number of E matter. such as: EEEE: Sunday, EEE: Sun</td>
        </tr>
        <tr>
            <td>a</td>
            <td>Am/pm marker</td>
            <td>Text</td>
            <td>PM</td>
        </tr>
        <tr>
            <td>H</td>
            <td>Hour in day (0-23)</td>
            <td>Number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>k</td>
            <td>Hour in day (1-24)</td>
            <td>Number</td>
            <td>24</td>
        </tr>
        <tr>
            <td>K</td>
            <td>Hour in am/pm (0-11)</td>
            <td>Number</td>
            <td>0</td>
        </tr>
        <tr>
            <td>h</td>
            <td>Hour in am/pm (1-12)</td>
            <td>Number</td>
            <td>12</td>
        </tr>
        <tr>
            <td>m</td>
            <td>Minute in hour</td>
            <td>Number</td>
            <td>30</td>
        </tr>
        <tr>
            <td>s</td>
            <td>Second in minute</td>
            <td>Number</td>
            <td>55</td>
        </tr>
        <tr>
            <td>S</td>
            <td>Millisecond</td>
            <td>Number</td>
            <td>978</td>
        </tr>
        <tr>
            <td>x/z</td>
            <td>Time zone</td>
            <td>General time zone</td>
            <td>Pacific Standard Time; PST; GMT-08:00</td>
        </tr>
        <tr>
            <td>Z</td>
            <td>Time zone</td>
            <td>RFC 822 time zone</td>
            <td>-0800</td>
        </tr>
    </tbody>
</table>

such as "yyyy-MM-dd'日'" will parse and format "2013-11-12日" "2013-01-02日". (content inside '' will preserve)

* locale: require('gregorian-calendar-format/locale/en_US') or require('gregorian-calendar-format/locale/zh_CN') specify text when render localize date time string.

#### String GregorianCalendarFormat.prototype.format(calendar: GregorianCalendar)

format an instance of GregorianCalendar according to pattern

#### GregorianCalendar GregorianCalendarFormat.prototype.parse(dateString: String, {locale: object})

parse a dateString to an instance of GregorianCalendar according to pattern, it's better to specify calendarLocale, such as

```js
df.parse('2013-11-12', {locale: require('gregorian-calendar/lib/locale/zh_CN'}));
```

### GregorianCalendarFormat GregorianCalendarFormat.getDateTimeInstance(dateStyle, timeStyle, locale)

get a predefine GregorianCalendarFormat instance

* dateStyle: enum of predefined date style, enums:
 - en_US:
   - GregorianCalendarFormat.Style.FULL presents EEEE, MMMM d, yyyy
   - GregorianCalendarFormat.Style.LONG presents MMMM d, yyyy
   - GregorianCalendarFormat.Style.MEDIUM presents MMM d, yyyy
   - GregorianCalendarFormat.Style.SHORT presents M/d/yy
 - zh_CN:
   - GregorianCalendarFormat.Style.FULL presents "yyyy'年'M'月'd'日' EEEE"
   - GregorianCalendarFormat.Style.LONG presents "yyyy'年'M'月'd'日'"
   - GregorianCalendarFormat.Style.MEDIUM presents "yyyy-M-d"
   - GregorianCalendarFormat.Style.SHORT presents "yy-M-d"

* timeStyle: enum of predefined date style, enums:
 - en_US:
   - GregorianCalendarFormat.Style.FULL presents 'h:mm:ss a \'GMT\'Z'
   - GregorianCalendarFormat.Style.LONG presents 'h:mm:ss a'
   - GregorianCalendarFormat.Style.MEDIUM presents 'h:mm:ss a'
   - GregorianCalendarFormat.Style.SHORT presents 'h:mm a'
 - zh_CN:
   - GregorianCalendarFormat.Style.FULL presents "ahh'时'mm'分'ss'秒' 'GMT'Z"
   - GregorianCalendarFormat.Style.LONG presents "ahh'时'mm'分'ss'秒'"
   - GregorianCalendarFormat.Style.MEDIUM presents "H:mm:ss"
   - GregorianCalendarFormat.Style.SHORT presents "ah:mm"

* locale: require('gregorian-calendar-format/locale/en_US') or require('gregorian-calendar-format/locale/zh_CN') specify text when render localize date time string.


## License

gregorian-calendar-format is released under the MIT license.