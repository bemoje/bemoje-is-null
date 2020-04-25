(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-null'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Returns true of value 'v' is null.
	 * @param {*} value - The value to evaluate
	 * @return {boolean}
	 */
	function isNull(value) {
		return value === null
	}

	return isNull;

})));
