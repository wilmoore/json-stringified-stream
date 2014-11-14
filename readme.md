# json-stringified-stream

[![Build Status](http://img.shields.io/travis/wilmoore/json-stringified-stream.svg)](https://travis-ci.org/wilmoore/json-stringified-stream) [![NPM version](http://img.shields.io/npm/v/json-stringified-stream.svg)](https://www.npmjs.org/package/json-stringified-stream) [![NPM downloads](http://img.shields.io/npm/dm/json-stringified-stream.svg)](https://www.npmjs.org/package/json-stringified-stream) [![LICENSE](http://img.shields.io/npm/l/json-stringified-stream.svg)](license)

> Transform stream accepting a JSON string to parse and stringify with an optional delimiter.

     % npm install json-stringified-stream

### Usage Example

    var stringify = require('./index');
    var transform = stringify("\n");
    process.stdin.pipe(transform).pipe(process.stdout);

### Running the examples

> output package.json contents on a single line with a trailing newline.

     % cat package.json | node examples/with-transform-stream.js

> output package.json contents as it appears in `package.json` (i.e. no transform).

     % cat package.json | node examples/no-transform-stream.js

## Inspiration

- [newline-json][]
- [format-json-stream][]

## License

  [MIT](license)

[newline-json]: https://github.com/CrowdProcess/newline-json
[format-json-stream]: https://github.com/thlorenz/format-json-stream

