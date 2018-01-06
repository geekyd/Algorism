function binarySearch(x, low, up, arr) {
  var mid = parseInt((low + up) /2);
  if (up == low && arr[mid] != x) {
   return -1;
 } else if (arr[mid] == x) {
    return x;
  } else if (arr[mid] < x) {
    low = mid + 1;
    return binarySearch(x, low, up, arr);
  } else if (arr[mid] > x) {
    up = mid;
    return binarySearch(x, low, up, arr);
  }
}

console.log(binarySearch(10, 0, 4, [1, 2, 3, 4, 10]));
