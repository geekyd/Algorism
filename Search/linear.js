function linearSearch(x, arr) {
  var i;
  for(i = 0; i<arr.length ;i++) {
    if(x == arr[i]) {
      console.log("Element Found at " + i);
      break;
    }
  }
  if (i == arr.length) {
    console.log("Element not found");
  }
}

linearSearch(3,[4, 5, 6, 7])
