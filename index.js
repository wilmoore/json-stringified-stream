'use strict';
var through = require('through');

/**
 * Generate a transform stream that emits stringified JSON string with `term` as delimiter.
 *
 * @param {String} term
 * String terminator (i.e. "\n" for JSON delimited with newline).
 *
 * @return {Stream}
 * Transform stream that emits stringified JSON string with `term` as delimiter.
 */

module.exports = function (term) {
  var json = "";
  term = term || "";

  function onend() {
    try {
      this.queue(JSON.stringify(JSON.parse(json)) + term);
    } catch (e) {
      this.queue(e.toString());
    }

    this.emit('end');
  }

  function ondata(data) {
    json += data;
  }

  return through(ondata, onend);
};
