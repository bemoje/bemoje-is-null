# @bemoje/is-null

Returns true of value 'v' is null.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-null" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-null" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-null" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-null.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-null" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-null.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-null" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-null" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-null/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-null" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-null
npm install --save @bemoje/is-null
npm install --save-dev @bemoje/is-null
```

## Usage

```javascript
import isNull from '@bemoje/is-null'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isNull

##### Returns
true of value 'v' is null.

##### Parameters

-   `value` **any** The value to evaluate

##### Returns
**[boolean][3]** 

[1]: #isnull

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean