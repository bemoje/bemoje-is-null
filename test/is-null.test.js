import isNull from '../src/is-null'

describe('isNull', () => {
	test('works', () => {
		expect(isNull(null)).toBe(true)
		expect(isNull()).toBe(false)
		expect(isNull('null')).toBe(false)
		expect(isNull(void 0)).toBe(false)
		expect(isNull(undefined)).toBe(false)
		expect(isNull('undefined')).toBe(false)
	})
})
