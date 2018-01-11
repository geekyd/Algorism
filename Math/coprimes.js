function GCD(a, b) {
  if(b == 0) {
    return a;
  }
  return GCD(b, a%b);
}

function main(a, b) {
  var v = GCD(a, b);
  if(v === 1) console.log("Coprime");
  else        console.log("Not Coprime");
}
main (7, 13);
