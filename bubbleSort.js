/*
Bubble Sort Algorithm

What is it:
- Bubble Sort is a simple sorting algorithm that repeatedly compares
  adjacent elements and swaps them if they are in the wrong order.
- After each pass, the largest unsorted element "bubbles up" to its
  correct position at the end of the array.

How it works:
1. Compare each pair of adjacent elements.
2. Swap them if the left element is bigger than the right.
3. Repeat for the entire array until no swaps are needed.

good points:
- Easy to understand and implement.
- Works well for small arrays or nearly sorted arrays.

bad points:
- Very slow for large arrays (O(n^2) time complexity).
- Not efficient compared to other sorting algorithms like Quick Sort or Merge Sort.

Time Complexity:
- Best case: O(n) (array is already sorted)
- Average case: O(n^2)
- Worst case: O(n^2)

Space Complexity:
- O(1) (in-place sorting, no extra space needed)
*/




function bubbleSort(arr) {
    let n = arr.length;       // get array length
    let swapped;              // flag to check if any swaps happened

    for (let i = 0; i < n - 1; ++i) {
        swapped = false;      // reset swapped flag for this pass

        for (let j = 0; j < n - i - 1; ++j) { // compare unsorted elements
            
            if (arr[j] > arr[j + 1]) {
                // swap adjacent elements if in wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // mark that a swap happened
            }
        }

        if (!swapped) {
            break;   // no swaps means array is already sorted
        }
    }

    return arr;  // return the sorted array
}

// Example usages:
console.log(bubbleSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(bubbleSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(bubbleSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(bubbleSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(bubbleSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
