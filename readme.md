# platform-utils 

> Helper functions for working with platform names in the Node.js vernacular (darwin, win32, linux). Works in Node.js and browsers.

Plays well with the Node.js core modules 
[`os.platform()`](https://nodejs.org/api/os.html#os_os_platform)
and 
[`process.platform`](https://nodejs.org/api/process.html#process_process_platform).

## Installation

```sh
npm install platform-utils --save
```

## Usage

This module exports an object with utility functions.

```js
const {
  getPlatformFromFilename,
  getPlatformFromUserAgent,
  getPlatformLabel
} = require('platform-utils')
```

## API

### `getPlatformFromFilename(filename)`

- `filename` String - e.g. `dist/my-cool-app.dmg`

Returns String `darwin`, `win32`, `linux`, or null.

### `getPlatformFromUserAgent([agent])`

- `agent` String (optional) - Can be omitted when used in the browser, where 
`navigator.userAgent` will be used automatically.

Returns String `darwin`, `win32`, `linux`, or null.

### `getPlatformLabel(platform)`

- `platform` String - Can be `darwin`, `win32`, or `linux`.

Returns String `macOS`, `Windows`, `Linux`, or null.


## Tests

```sh
npm install
npm test
```

## Dependencies

- [ua-parser-js](https://github.com/faisalman/ua-parser-js): Lightweight JavaScript-based user-agent string parser

## Dev Dependencies

- [buble](git+https://gitlab.com/Rich-Harris/buble.git): The blazing fast, batteries-included ES2015 compiler
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [random-useragent](https://github.com/skratchdot/random-useragent): Get a random useragent (with an optional filter)
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
