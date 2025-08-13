/*
Cycle Sort Algorithm

What is it:
- Cycle Sort is an in-place, non-comparison-based sorting algorithm.
- It minimizes the number of writes by rotating elements to their correct positions in cycles.
- Particularly useful when write operations are expensive.

How it works:
1. Start from the first element and determine its correct position in the sorted array.
2. If it is not already in the correct position, swap it with the element at its correct position.
3. Continue rotating elements in the cycle until the current element is in the correct position.
4. Move to the next element and repeat until the entire array is sorted.

good points:
- Minimizes the number of writes.
- Useful for situations with write-costly memory.

bad points:
- Not stable: order of equal elements may change.
- Time complexity is O(n^2), so not efficient for large datasets.

Time Complexity:
- Best, Average, Worst case: O(n^2)

Space Complexity:
- O(1) (in-place sorting)
*/




function cycleSort(arr) {
    const n = arr.length;    // get array length

    for (let cycleStart = 0; cycleStart < n - 1; ++cycleStart) {
        let item = arr[cycleStart];

        // Find the correct position for item
        let pos = cycleStart;
        for (let i = cycleStart + 1; i < n; ++i) {
            if (arr[i] < item) {
                ++pos;
            }
        }

        // If item is already in the correct position, continue
        if (pos === cycleStart) continue;

        // Skip duplicates
        while (item === arr[pos]) {
            ++pos;
        }

        // Swap item to its correct position
        if (pos !== cycleStart) {
            [arr[pos], item] = [item, arr[pos]];
        }

        // Rotate the rest of the cycle
        while (pos !== cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart + 1; i < n; ++i) {
                if (arr[i] < item) ++pos;
            }

            while (item === arr[pos]) ++pos;

            if (item !== arr[pos]) {
                [arr[pos], item] = [item, arr[pos]];
            }
        }
    }

    return arr;
}

// Example usages:
console.log(cycleSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(cycleSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(cycleSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(cycleSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(cycleSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
