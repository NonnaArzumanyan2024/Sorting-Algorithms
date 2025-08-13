/*
Radix Sort Algorithm

What is it:
- Radix Sort is a non-comparison-based sorting algorithm.
- It sorts numbers digit by digit, starting from the least significant digit (LSD) to the most significant digit (MSD).
- Uses a stable sorting algorithm (like Counting Sort) as a subroutine for each digit.

How it works:
1. Find the maximum number to know the number of digits.
2. Start from the least significant digit (ones place).
3. Sort numbers based on current digit using Counting Sort (stable).
4. Move to the next significant digit (tens, hundreds, etc.).
5. Repeat until all digits are processed.

good points:
- Efficient for large numbers of integers with small range of digits.
- Stable: preserves order of equal elements.
- Non-comparison based, can be faster than O(n log n) for certain cases.

bad points:
- Only works with integers (or can be adapted for fixed-length strings).
- Uses extra space for stable sorting.
- More complex than simple sorts like Bubble or Insertion Sort.

Time Complexity:
- O(d * (n + k)), 
where n = number of elements, d = number of digits, k = base (usually 10)

Space Complexity:
- O(n + k) for the counting array used in stable sort for each digit
*/





function radixSort(arr) {
    const n = arr.length;          // get array length
    const max = Math.max(...arr);  // find the maximum number to know number of digits
    let exp = 1;                   // start with least significant digit (1 = ones place)

    while (Math.floor(max / exp) > 0) {

        // Counting sort for current digit
        const output = new Array(n).fill(0);
        const count = new Array(10).fill(0);   // base 10 digits: 0-9

        // count occurrences of each digit
        for (let i = 0; i < n; ++i) {
            const digit = Math.floor(arr[i] / exp) % 10;
            count[digit]++;
        }

        // build prefix sum to determine positions
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // build output array (iterate from end for stability)
        for (let i = n - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }

        // copy sorted numbers back to original array
        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }

        
        exp *= 10; // move to next digit (tens, hundreds, ...)
    }

    return arr;
}

// Example usages:
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));  // [2, 24, 45, 66, 75, 90, 170, 802]
console.log(radixSort([5, 3, 8, 1, 4]));                    // [1, 3, 4, 5, 8]
console.log(radixSort([10, 9, 8, 7, 6]));                   // [6, 7, 8, 9, 10]
console.log(radixSort([1, 2, 3, 4, 5]));                    // [1, 2, 3, 4, 5] (already sorted)
console.log(radixSort([20, 5, 15, 0, 10]));                 // [0, 5, 10, 15, 20]
