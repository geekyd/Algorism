var array = [ 5, 1, 1, 2, 1 ];

function selection_sort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var s = i;
    for (var j = i+1; j< arr.length; j++) {
      if (arr[j] < arr[s]) {
        s = j;
      }
    }
    var t = arr[i];
    arr[i] = arr[s];
    arr[s] = t;
  }
  console.log(arr);
}

selection_sort(array);
