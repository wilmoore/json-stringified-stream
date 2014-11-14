# json-stringified-stream [![NPM version](https://badge.fury.io/js/json-stringified-stream.png)](http://badge.fury.io/js/json-stringified-stream) [![Dependency Status](https://gemnasium.com/wilmoore/json-stringified-stream.js.svg)](https://gemnasium.com/wilmoore/json-stringified-stream.js)

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

  MIT

[newline-json]: https://github.com/CrowdProcess/newline-json
[format-json-stream]: https://github.com/thlorenz/format-json-stream

