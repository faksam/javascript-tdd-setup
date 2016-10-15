// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(data) {
    if (data === parseInt(data, 10))
    {
    if (data < 0) 
    {
      console.log(data + " is an incorect input!!!");
      return false;
    }
    else
    {
      var primes = 0;
      for(var i = 2 ; i <= data; i++)
      {
          var isPrime = true;

          for(var j=2; j<= Math.floor(Math.sqrt(i)); j++){
              if(i%j === 0){
                  isPrime = false;
              }
          }
          if(isPrime === true){
              primes = primes+i;
          }
      }
      console.log("Returning the value: " + primes);
      return primes;
    }
    }
    else
    {
      console.log(data + " is an incorect input!!!");
      return false;
    }
  },
}
