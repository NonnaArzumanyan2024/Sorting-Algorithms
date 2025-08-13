/*
Insertion Sort Algorithm

What is it:
- Insertion Sort builds the sorted array one element at a time.
- Each element from the unsorted part is picked and placed into its correct position
  in the sorted part of the array.

How it works:
1. Start from the second element (first element is considered sorted).
2. Compare it with elements in the sorted part and shift larger elements to the right.
3. Insert the current element into the correct position.
4. Repeat for all elements.

good points:
- Simple and easy to understand.
- Efficient for small or nearly sorted arrays.

bad points:
- Slow for large arrays (O(n^2) time complexity).
- Not suitable for large datasets.

Time Complexity:
- Best case: O(n) (already sorted array)
- Average case, Worst case: O(n^2)

Space Complexity:
- O(1) (in-place sorting)
*/




function insertionSort(arr) {
    let n = arr.length;       // get array length

    for (let i = 1; i < n; ++i) {
        let key = arr[i];     // element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // one position ahead to make space for key

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;       // insert key into correct position
    }

    return arr;
}

// Example usages:
console.log(insertionSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(insertionSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(insertionSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(insertionSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(insertionSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
