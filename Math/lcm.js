function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a%b);
}

function lcm(a, b) {
  var g = gcd(a, b);
  return (a*b) / g;
}

console.log(lcm(15, 20));
