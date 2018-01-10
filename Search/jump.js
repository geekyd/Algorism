function jumpSearch(b, arr, x) {
  var low = 0;
  var found = false;
  var high = arr.length;
  var iterations = parseInt(arr.length/b);
  for (var v = 0; v<iterations; v++) {
    if (arr[v*b] <= x) {
      low = v*b;
    } else if (arr[v*b] > x) {
      high = v*b;
      break;
    }
  }
  for (var i = low; i <= high; i++) {
    if (arr[i] == x)  found = true;
  }
  if (found) {
    console.log("Found");
  } else {
    console.log("Not Found");
  }
}

jumpSearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
