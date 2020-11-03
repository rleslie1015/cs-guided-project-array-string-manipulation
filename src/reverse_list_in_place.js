function reverse(arr) {
    var _a;
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left += 1;
        right -= 1;
    }
    return arr;
}
var nums = [20, 30, 50, 100, 80];
reverse(nums);
console.log(reverse(nums));
