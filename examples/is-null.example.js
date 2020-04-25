import isNull from '../src/is-null'

isNull(null)
//=> true

isNull('null')
//=> false

isNull(void 0)
//=> false

isNull(undefined)
//=> false

isNull()
//=> false

isNull('undefined')
//=> false
