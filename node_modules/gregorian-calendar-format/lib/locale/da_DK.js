'use strict';

module.exports = {
  eras: ['f.Kr.', 'e.Kr.'],
  months: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
  shortMonths: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  weekdays: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  shortWeekdays: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
  veryShortWeekdays: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
  ampms: ['AM', 'PM'],
  datePatterns: ['EEEE \d. d. MMMM yyyy', // mandag d. 23. oktober 2015
  '\d. d. MMMM yyyy', // d. 23. oktober 2015
  'd. MMMM yyyy', // 23. oktober 2015
  'd. MMM. yyyy', // 23. okt. 2015
  'dd/MM/yy', // 23/10/15
  'dd/MM/yyyy', // 23/10/2015
  'yyyy-MM-dd'],
  // 2015-10-15
  timePatterns: ['HH:mm:ss \'GMT\'Z', 'HH:mm:ss', 'HH:mm'],
  dateTimePattern: '{date} {time}'
};