function pascal_triangle(limit) {
  var previous = "1";
  var current = "";
  var i = 0;
  while(i < limit) {
    for(var j = 0; j <= i; j++) {
      if(j!=0 && j!=i) {
        current += " " + (parseInt(previous.split(" ")[j]) + parseInt(previous.split(" ")[j-1]));
      } else {
        current = current + " 1";
      }
    }
    console.log(current.trim());
    previous = current.trim();
    current = "";
    i++;
  }
}

pascal_triangle(10);
