function insertion(arr) {
  var v = 0;
  for (var i=0; i<arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        v = arr[i];
        arr[i] = arr[j];
        arr[j] = v;
      }
    }
  }
  console.log(arr);
}

insertion([5, 4, 3, 2, 1]);
