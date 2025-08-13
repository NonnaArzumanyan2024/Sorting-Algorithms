/*
Merge Sort Algorithm

What is it:
- Merge Sort is a divide-and-conquer sorting algorithm.
- It divides the array into two halves, recursively sorts them, and then merges the sorted halves.

How it works:
1. Divide the array into two halves until each part has one element.
2. Merge the two halves by comparing elements and arranging them in order.
3. Repeat merging until the entire array is sorted.

good points:
- Always fast: O(n log n) time complexity, even for large arrays.
- Stable: preserves order of equal elements.
- Works well with large datasets.

bad points:
- Uses extra space for temporary arrays.
- More complex to understand than simple sorts like Bubble or Insertion Sort.

Time Complexity:
- Best, Average, Worst case: O(n log n)

Space Complexity:
- O(n) due to temporary arrays used in merging
*/




function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;                               // base case: already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));    // sort left half
    const right = mergeSort(arr.slice(mid));      // sort right half

    return merge(left, right);                    // merge sorted halves
}

// helper function to merge two sorted arrays
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // compare elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            ++i;
        } else {
            result.push(right[j]);
            ++j;
        }
    }

    // add remaining elements from left, if any
    while (i < left.length) {
        result.push(left[i]);
        ++i;
    }

    // add remaining elements from right, if any
    while (j < right.length) {
        result.push(right[j]);
        ++j;
    }

    return result;    // return merged and sorted array
}

// Example usages:
console.log(mergeSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(mergeSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(mergeSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(mergeSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(mergeSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
