const assert = require('assert');

// An alias of assert.ok()
assert(true);  // OK
assert(1);     // OK
// assert(false);
  // throws "AssertionError: false == true"
// assert(0);
  // throws "AssertionError: 0 == true"
// assert(false, 'it\'s false');
  // throws "AssertionError: it's false"
