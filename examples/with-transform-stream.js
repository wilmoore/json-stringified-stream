var stringify = require('..');
process.stdin.pipe(stringify("\n")).pipe(process.stdout);
