'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('../lib/SumOfPrimes.js');

describe("Test that constants are computed properly", function() {
  //1

  it("Correct!, Sum of primes between 0 - 5 is 10", function() {
    assert(
      lib.sumOfPrimes(5)==10
    );
  });

//2

it("Correct!, Sum of primes between 0 - 10 is 17", function() {
  assert(
    lib.sumOfPrimes(10)==17
  );
});

//3

it("Correct!, Sum of primes between 0 - 17 is 58", function() {
  assert(
    lib.sumOfPrimes(17)==58
  );
});

//4

it("Correct!, Sum of primes between 0 - 29 is 129", function() {
  assert(
    lib.sumOfPrimes(29)==129
  );
});

//5

it("Correct!!!, Found incorrect input", function() {
  assert(
    lib.sumOfPrimes("aString")==false
  );
});

//6

it("Correct!!!, Sum of primes between 0 - 0 is 0", function() {
  assert(
    lib.sumOfPrimes(0)==false
  );
});

//7

it("Correct!!!, Found incorrect input", function() {
  assert(
    lib.sumOfPrimes(-29)==false
  );
});

//8

it("Correct!!!, Found incorrect input", function() {
  assert(
    lib.sumOfPrimes([29,78,23,67])==false
  );
});

//9

it("Correct!!!, Found incorrect input", function() {
  assert(
    lib.sumOfPrimes('c')==false
  );
});

//10

it("Correct!!!, Sum of primes between 0 - 57 is 381", function() {
  assert(
    lib.sumOfPrimes(57)==381
  );
});

});
