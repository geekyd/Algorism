function heapify(arr, n, i) { //Max heap
  var largest = i;
  var left = 2*i + 1;
  var right = 2*i + 2;

  if (left<n && arr[left] > arr[largest])
    largest = left;
  if (right < n && arr[right] > arr[largest])
    largest = right;

  if (largest != i) {
    var t = arr[i];
    arr[i] = arr[largest];
    arr[largest] = t;
    heapify(arr, n, largest);
  }
}

function heapSort(arr) {
  var l = arr.length;

  for(var i =0; i< l-1; i++) {
    heapify(arr, l-i, i);
    var x = arr[0];
    arr[0] = arr[l-1];
    arr[l-1] = x;
    console.log(arr[0]);
  }
}

heapSort([5, 4, 10, 3, 16, 2, 1]);
