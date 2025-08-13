/*
Quick Sort — Lomuto Partition Scheme

What is it:
- Quick Sort is a divide-and-conquer algorithm.
- It works by selecting a 'pivot' element and partitioning the array
  so that all elements less than the pivot come before it, and all greater go after it.
- This version uses the Lomuto partition scheme, where the pivot is usually the last element.

How it works:
1. Choose the last element as the pivot.
2. Partition the array:
   - Move all elements smaller than the pivot to the left.
   - Keep larger elements on the right.
3. Place the pivot in its correct sorted position.
4. Recursively repeat for the left and right subarrays.

Good points:
- Efficient on average: O(n log n).
- Simple to implement.

Bad points:
- Worst case O(n²) if pivot choice is poor (e.g., already sorted data).
- Not stable (does not preserve order of equal elements).

Time Complexity:
- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n²)

Space Complexity:
- O(log n) (due to recursion stack)
*/




// swap function to exchange two elements in the array
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}


// Lomuto partition function
function lomutoPartition(arr, left, right) {
    const pivot = arr[right];      // pivot is last element
    let i = left - 1;              // position for smaller elements

    // Compare each element with pivot
    for (let j = left; j < right; ++j) {
        if (arr[j] < pivot) {     // element smaller than pivot
            ++i;
            swap(arr, i, j);      // swap to correct position
        }
    }

    // Place pivot in correct position
    swap(arr, i + 1, right);      // swap pivot with element at i+1
    return i + 1;                 // return pivot index
}


// QuickSort function using Lomuto partition
function quickSortLomuto(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = lomutoPartition(arr, left, right); // partition the array

        // Recursively sort left and right sides
        quickSortLomuto(arr, left, pivotIndex - 1);
        quickSortLomuto(arr, pivotIndex + 1, right);
    }
    return arr; // return sorted array
}

// Example usages:
console.log(quickSortLomuto([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(quickSortLomuto([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(quickSortLomuto([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(quickSortLomuto([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(quickSortLomuto([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
