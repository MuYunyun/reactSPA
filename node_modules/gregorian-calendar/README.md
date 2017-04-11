# gregorian-calendar

gregorian calendar lib for browser and nodejs. ported from JAVA.

[![date](https://nodei.co/npm/gregorian-calendar.png)](https://npmjs.org/package/gregorian-calendar)
[![NPM downloads](http://img.shields.io/npm/dm/gregorian-calendar.svg)](https://npmjs.org/package/gregorian-calendar)
[![Build Status](https://secure.travis-ci.org/yiminghe/gregorian-calendar.png?branch=master)](https://travis-ci.org/yiminghe/gregorian-calendar)
[![Coverage Status](https://img.shields.io/coveralls/yiminghe/gregorian-calendar.svg)](https://coveralls.io/r/yiminghe/gregorian-calendar?branch=master)
[![Dependency Status](https://gemnasium.com/yiminghe/gregorian-calendar.png)](https://gemnasium.com/yiminghe/gregorian-calendar)
[![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)](http://nodejs.org/download/)

[![Sauce Test Status](https://saucelabs.com/buildstatus/gregorian-calendar)](https://saucelabs.com/u/gregorian-calendar)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/gregorian-calendar.svg)](https://saucelabs.com/u/gregorian-calendar)

## use on node

```javascript
var GregorianCalendar = require('gregorian-calendar');
var date = new GregorianCalendar(require('gregorian-calendar/lib/locale/zh_CN')); // defaults to en_US
date.setTime(+new Date());
console.log(date.getDayOfWeek());
```

## API

### Constructor GregorianCalendar(locale)

* locale: specify suc as timeZoneOffset, firstDayOfWeek, can be require('gregorian-calendar/lib/locale/zh_CN') or 
require('gregorian-calendar/lib/locale/en_US')


### Enums

```js
  SUNDAY: 0,
  /**
   * Enum indicating monday
   * @type Number
   * @member Date.Gregorian
   */
  MONDAY: 1,
  /**
   * Enum indicating tuesday
   * @type Number
   * @member Date.Gregorian
   */
  TUESDAY: 2,
  /**
   * Enum indicating wednesday
   * @type Number
   * @member Date.Gregorian
   */
  WEDNESDAY: 3,
  /**
   * Enum indicating thursday
   * @type Number
   * @member Date.Gregorian
   */
  THURSDAY: 4,
  /**
   * Enum indicating friday
   * @type Number
   * @member Date.Gregorian
   */
  FRIDAY: 5,
  /**
   * Enum indicating saturday
   * @type Number
   * @member Date.Gregorian
   */
  SATURDAY: 6,
  /**
   * Enum indicating january
   * @type Number
   * @member Date.Gregorian
   */
  JANUARY: 0,
  /**
   * Enum indicating february
   * @type Number
   * @member Date.Gregorian
   */
  FEBRUARY: 1,
  /**
   * Enum indicating march
   * @type Number
   * @member Date.Gregorian
   */
  MARCH: 2,
  /**
   * Enum indicating april
   * @type Number
   * @member Date.Gregorian
   */
  APRIL: 3,
  /**
   * Enum indicating may
   * @type Number
   * @member Date.Gregorian
   */
  MAY: 4,
  /**
   * Enum indicating june
   * @type Number
   * @member Date.Gregorian
   */
  JUNE: 5,
  /**
   * Enum indicating july
   * @type Number
   * @member Date.Gregorian
   */
  JULY: 6,
  /**
   * Enum indicating august
   * @type Number
   * @member Date.Gregorian
   */
  AUGUST: 7,
  /**
   * Enum indicating september
   * @type Number
   * @member Date.Gregorian
   */
  SEPTEMBER: 8,
  /**
   * Enum indicating october
   * @type Number
   * @member Date.Gregorian
   */
  OCTOBER: 9,
  /**
   * Enum indicating november
   * @type Number
   * @member Date.Gregorian
   */
  NOVEMBER: 10,
  /**
   * Enum indicating december
   * @type Number
   * @member Date.Gregorian
   */
  DECEMBER: 11
```

### GregorianCalendar.prototype.set(year, month, dayOfMonth, hourOfDay, minutes, seconds, milliseconds)

same as call setYear, setMonth, setDayOfMonth ....

### GregorianCalendar.prototype.setTime(time: Number)

set absolute time for current instance

### Number GregorianCalendar.prototype.getTime()

get absolute time for current instance

### GregorianCalendar.prototype.setTimezoneOffset(timezoneOffset: Number)

set current date instance's timezone offset (in minutes)

### Number GregorianCalendar.prototype.getTimezoneOffset()

get current date instance's timezone offset (in minutes)

### GregorianCalendar.prototype.setYear(year: Number)

set the year of the given calendar field.

### Number GregorianCalendar.prototype.getYear()

Returns the year of the given calendar field.

### GregorianCalendar.prototype.setMonth(month: Number)

set the month of the given calendar field. January is 0, you can use enum

### GregorianCalendar.prototype.rollSetMonth(month: Number)

set the month of the given calendar field without influence month.

```js
2015-09-29 -> setMonth(2) -> 2015-03-01
2015-09-29 -> rollSetMonth(2) -> 2015-02-28
```

### Number GregorianCalendar.prototype.getMonth()

Returns the month of the given calendar field.

### GregorianCalendar.prototype.setDayOfMonth(day: Number)

set the day of month of the given calendar field.

### Number GregorianCalendar.prototype.getDayOfMonth()

Returns the day of month of the given calendar field.

### GregorianCalendar.prototype.setHourOfDay(hour: Number)

set the hour of day for the given calendar field.

### Number GregorianCalendar.prototype.getHourOfDay()

Returns the hour of day for the given calendar field.

### GregorianCalendar.prototype.setMinutes(minute: Number)

set the minute of the given calendar field.

### Number GregorianCalendar.prototype.getMinutes()

Returns the minute of the given calendar field.

### GregorianCalendar.prototype.setSeconds(second: Number)

set the second of the given calendar field.

### Number GregorianCalendar.prototype.getSeconds()

Returns the second of the given calendar field.

### GregorianCalendar.prototype.setMilliSeconds(second: Number)

set the millisecond of the given calendar field.

### Number GregorianCalendar.prototype.getMilliSeconds()

Returns the millisecond of the given calendar field.

### Number GregorianCalendar.prototype.getWeekOfYear()

Returns the week of year of the given calendar field.

### Number GregorianCalendar.prototype.getWeekOfMonth()

Returns the week of month of the given calendar field.

### Number GregorianCalendar.prototype.getDayOfYear()

Returns the day of year of the given calendar field.

### Number GregorianCalendar.prototype.getDayOfWeek()

Returns the day of week of the given calendar field. sunday is 0, monday is 1

### Number GregorianCalendar.prototype.getDayOfWeekInMonth()

Returns the day of week in month of the given calendar field.

### GregorianCalendar.prototype.addYear(amount: Number)

add the year of the given calendar field.

### GregorianCalendar.prototype.addMonth(amount: Number)

add the month of the given calendar field.

### GregorianCalendar.prototype.addDayOfMonth(amount: Number)

add the day of month of the given calendar field.

### GregorianCalendar.prototype.addHourOfDay(amount: Number)

add the hour of day of the given calendar field.

### GregorianCalendar.prototype.addMinute(amount: Number)

add the minute of the given calendar field.

### GregorianCalendar.prototype.addSecond(amount: Number)

add the second of the given calendar field.

### GregorianCalendar.prototype.addMilliSecond(amount: Number)

add the millisecond of the given calendar field.

### Number GregorianCalendar.prototype.getWeekYear()

Returns the week number of year represented by this GregorianCalendar.

### GregorianCalendar.prototype.setWeekDate(weekYear: Number, weekOfYear: Number, dayOfWeek: Number)

Sets this GregorianCalendar to the date given by the date specifiers - weekYear,
weekOfYear, and dayOfWeek. weekOfYear follows the WEEK_OF_YEAR numbering.
The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.

* weekYear:   the week year
* weekOfYear: the week number based on weekYear
* dayOfWeek:  the day of week value

### Number GregorianCalendar.prototype.getWeeksInWeekYear()

Returns the number of weeks in the week year

### GregorianCalendar GregorianCalendar.prototype.clone()

Returns a clone of current instance

### boolean GregorianCalendar.prototype.equals(other: GregorianCalendar)


### Number GregorianCalendar.prototype.compareToDay(other: GregorianCalendar)

compare this object and other by day. return -1 0 or 1

### GregorianCalendar.prototype.clear()

clear all field of current instance


## License

gregorian-calendar is released under the MIT license.
