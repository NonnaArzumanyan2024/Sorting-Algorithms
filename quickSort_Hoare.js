/*
Quick Sort (Hoare Partition Scheme)

What is it:
- Quick Sort is a divide-and-conquer sorting algorithm.
- Hoare partitioning was invented by Tony Hoare (the creator of Quick Sort).
- It uses two pointers moving towards each other to partition the array.

How it works:
1. Choose a pivot (mid).
2. Use two pointers:
   - `i` moves from the left until it finds an element >= pivot.
   - `j` moves from the right until it finds an element <= pivot.
3. Swap elements at `i` and `j` if they haven't crossed yet.
4. Repeat until pointers cross.
5. Recursively sort the two partitions.

good points:
- Often faster than Lomuto partition due to fewer swaps.
- Works well for large datasets with a good pivot selection.

bad points:
- Slightly more complex to implement.
- Still O(n²) in worst case if pivot selection is poor (e.g., already sorted array with bad pivot choice).

Time Complexity:
- Best case, Average case: O(n log n)
- Worst case: O(n²) (when pivot choice is bad)

Space Complexity:
- O(log n) due to recursion stack 
*/




// Quick Sort using Hoare Partitioning

function quickSortHoare(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = hoarePartition(arr, low, high); // get partition index

        // recursively sort left side of pivot
        quickSortHoare(arr, low, pivotIndex);

        // recursively sort right side of pivot
        quickSortHoare(arr, pivotIndex + 1, high);
    }
    return arr;   // return sorted array
}


// Hoare partition function
function hoarePartition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)]; // choose middle element as pivot
    let i = low - 1;       // left pointer
    let j = high + 1;      // right pointer

    while (true) {
        // move i right until element >= pivot is found
        do { i++; } while (arr[i] < pivot);

        // move j left until element <= pivot is found
        do { j--; } while (arr[j] > pivot);

        if (i >= j) return j;  // pointers crossed, return partition index

        // swap elements on wrong sides
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Example usages:
console.log(quickSortHoare([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(quickSortHoare([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(quickSortHoare([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(quickSortHoare([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(quickSortHoare([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
