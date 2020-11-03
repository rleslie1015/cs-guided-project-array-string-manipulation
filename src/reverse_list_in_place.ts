function reverse(arr: number[]): number[] {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [ arr[left], arr[right] ] = [ arr[right], arr[left] ]
        
        left += 1; 

        right -= 1;

    }

    return arr;
}

const nums = [20, 30, 50, 100, 80]

reverse(nums)

console.log(reverse(nums));