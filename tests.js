'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/SumOfPrimes.js');

describe("Test that constants are computed properly", function() {
  //1

  it("Incorrect!!!, Sum of primes between 0 - 5 is 10", function() {
    assert(
      lib.compareCoefficients(lib.sumOfPrimes(5)==10)
    );
  });
});

//2

it("Incorrect!!!, Sum of primes between 0 - 10 is 17", function() {
  assert(
    lib.compareCoefficients(lib.sumOfPrimes(10)==17)
  );
});
});

});