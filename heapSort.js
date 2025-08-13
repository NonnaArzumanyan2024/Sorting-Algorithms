/*
Heap Sort Algorithm

What is it:
- Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
- It first builds a max heap from the array, then repeatedly extracts the maximum element and rebuilds the heap.

How it works:
1. Build a max heap from the input array.
2. Swap the first element (maximum) with the last element.
3. Reduce the heap size by 1.
4. Heapify the root to maintain max heap property.
5. Repeat steps 2-4 until the heap size is 1.

good points:
- Always O(n log n) time complexity.
- In-place sorting (no extra arrays needed).
- Good for large datasets.

bad points:
- Not stable: equal elements may change relative order.
- More complex than simple sorts like Bubble or Insertion Sort.

Time Complexity:
- Best, Average, Worst case: O(n log n)

Space Complexity:
- O(1) (in-place sorting)
*/





function heapSort(arr) {
    const n = arr.length;   // get array length

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; --i) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; --i) {
        // Move current root (max) to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Heapify a subtree rooted at index i
function heapify(arr, heapSize, i) {
    let largest = i;                  // Initialize largest as root
    const left = 2 * i + 1;           // left child index
    const right = 2 * i + 2;          // right child index

    // If left child is larger than root
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];  // swap
        heapify(arr, heapSize, largest);                  // recursively heapify the affected subtree
    }
}

// Example usages:
console.log(heapSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(heapSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(heapSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(heapSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(heapSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
