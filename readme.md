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

Here's the gist of how the detection works:

```js
if (ext === 'exe') return 'win32'
if (ext === 'zip' && parts.includes('win32')) return 'win32'
if (ext === 'zip' && parts.includes('windows')) return 'win32'
if (ext === 'zip' && parts.includes('win')) return 'win32'
if (ext === 'zip' && parts.includes('ia32')) return 'win32'

if (ext === 'dmg') return 'darwin'
if (ext === 'pkg') return 'darwin'
if (ext === 'zip' && parts.includes('osx')) return 'darwin'
if (ext === 'zip' && parts.includes('mac')) return 'darwin'
if (ext === 'zip' && parts.includes('macos')) return 'darwin'
if (ext === 'zip' && parts.includes('mas')) return 'darwin'
if (ext === 'zip' && parts.includes('darwin')) return 'darwin'

if (ext === 'rpm') return 'linux'
if (ext === 'deb') return 'linux'
if (ext === 'appimage') return 'linux'
if (ext === 'zip' && parts.includes('linux')) return 'linux'
```

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

- [buble](https://gitlab.com/Rich-Harris/buble): The blazing fast, batteries-included ES2015 compiler
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [random-useragent](https://github.com/skratchdot/random-useragent): Get a random useragent (with an optional filter)
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
