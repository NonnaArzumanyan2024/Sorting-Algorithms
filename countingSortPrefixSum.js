/*
Counting Sort (Stable Version with Prefix Sum)

What is it:
- Stable Counting Sort preserves the relative order of equal elements.
- Uses prefix sum in the count array to determine correct positions.

How it works:
1. Find the maximum value.
2. Create a count array and count occurrences.
3. Modify count array to store prefix sums.
4. Build the output array using prefix sums (stable sorting).
5. Copy output back to original array.

good points:
- Stable: preserves order of equal elements.
- Fast for integers with small range.

bad points:
- Uses extra space for count and output arrays.
- Not suitable for negative numbers (without adjustment).

Time Complexity:
- O(n + k), where n = array length, k = max value

Space Complexity:
- O(n + k) for output and count arrays
*/




function countingSortStable(arr) {
    const max = Math.max(...arr);              // find the largest number in the array
    const count = new Array(max + 1).fill(0);  // create count array and initialize all to 0
    const output = new Array(arr.length);      // create output array to store sorted result

    // 1 Count occurrences of each number
    for (let num of arr) {
        ++count[num]; // increment the count at index = num
    }

    // 2 Build prefix sum to know the position of each element in output
    for (let i = 1; i < count.length; ++i) {
        count[i] += count[i - 1]; // each position now tells the end index of that number
    }

    // 3 Build output array by placing elements at correct positions
    // Iterate from the end to make it stable (preserves original order for duplicates)
    for (let i = arr.length - 1; i >= 0; --i) {
        output[count[arr[i]] - 1] = arr[i];      // place element at its correct position
        --count[arr[i]];                         // decrease count for next duplicate
    }

    // 4 Copy sorted elements back to original array
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = output[i];
    }

    return arr; // return the sorted array
}

// Example usages:
console.log(countingSortStable([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]
console.log(countingSortStable([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(countingSortStable([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(countingSortStable([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(countingSortStable([20, 5, 15, 0, 10]));    // [0, 5, 10, 15, 20]
