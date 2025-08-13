/*
Counting Sort (Basic Version)

What is it:
- Counting Sort is a sorting algorithm for integers within a known range.
- It counts the number of times each value appears and then places them in order.

How it works:
1. Find the maximum value in the array.
2. Create a count array of size (max + 1) and initialize with 0.
3. Count occurrences of each number.
4. Overwrite the original array using the counts.

good points:
- Very fast for small integers with a limited range.
- Simple to understand.

bad points:
- Not suitable for negative numbers (without adjustment).
- Uses extra space for the count array.
- Not stable (doesn't preserve order of equal elements).

Time Complexity:
- O(n + k), where n = array length, k = max value

Space Complexity:
- O(k) for the count array
*/




function countingSortBasic(arr) {
    const max = Math.max(...arr);                // find the maximum value in the array
    const count = new Array(max + 1).fill(0);    // create count array, initialized with 0

    // count occurrences of each number
    for (let num of arr) {
        ++count[num];                            // increment count for this number
    }

    // overwrite original array with sorted numbers
    let index = 0;                               // index to keep track of position in original array
    for (let i = 0; i < count.length; ++i) {
        
        while (count[i] > 0) {                  // for each occurrence of number i
            arr[index++] = i;                   // place it in the original array
            count[i]--;                         // decrease count since we've placed it
        }
    }

    return arr;                                  // return sorted array
}

// Example usages:
console.log(countingSortBasic([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]
console.log(countingSortBasic([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(countingSortBasic([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(countingSortBasic([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(countingSortBasic([20, 5, 15, 0, 10]));    // [0, 5, 10, 15, 20]
