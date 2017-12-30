var arr = [ 5, 1, 1, 2, 1 ];

function bubbleSort() {
  for(var i =0; i< arr.length -1; i++) {
    for(var j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }
  }
  console.log(arr);
}

bubbleSort();
