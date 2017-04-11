# Changelog

Check for latest changes on the [milestones page](https://github.com/reflux/refluxjs/milestones).

## v0.3.0

Breaking changes!

* Removed promise extensions. These are now moved to [reflux-promise](https://github.com/reflux/reflux-promise) library.
* Removed evil `eval`! \o/ This fixes CSP problems, see [reflux/refluxjs#409](https://github.com/reflux/refluxjs/issues/409)

## v0.2.1

* Improved `Reflux.createActions`. See [reflux/refluxjs#391](https://github.com/reflux/refluxjs/pull/391).

## v0.2.0

* Extend `Reflux.createActions` to accept a mixed array of strings and definition objects. See [reflux/refluxjs#391](https://github.com/reflux/refluxjs/pull/391).

* Version number for reflux-core is exposed in Reflux.version object. May also contain version numbers for extensions and add-ons.

* Implemented hook for add-ons and extensions, Reflux.use(). See [#2](https://github.com/reflux/reflux-core/issues/2), [reflux/refluxjs#380](https://github.com/reflux/refluxjs/issues/380).

* Extracted from refluxjs v0.2.11. See [reflux/refluxjs#380](https://github.com/reflux/refluxjs/issues/380), [reflux/refluxjs#107](https://github.com/reflux/refluxjs/issues/107).
