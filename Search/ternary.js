function ternarySearch(arr, l, r, x) {
  if (r >= l) {
      var mid1 = l + parseInt((r - l)/3);
      var mid2 = mid1 + parseInt((r - l)/3);

      if (arr[mid1] == x) return mid1;
      if (arr[mid2] == x) return mid2;

      if (arr[mid1] > x) return ternarySearch(arr, l, mid1-1, x);
      if (arr[mid2] < x) return ternarySearch(arr, mid2+1, r, x);

      return ternarySearch(arr, mid1+1, mid2-1, x);
   }
  return -1;
}
ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 7);
