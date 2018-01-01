//Implements seive algorithm to list all the prime numbers
function primes(limit) {
  var v = new Array(limit);

  for (var i = 2; i < limit; i++) {
    for (var j = 2; j*i < limit; j++) {
      v[i*j] = -1;
    }
  }

  for (var k = 2; k < limit; k++) {
    if(v[k] != -1) {
      console.log(k);
    }
  }
}

primes(100);
