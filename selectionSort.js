/*
Selection Sort Algorithm

What is it:
- Selection Sort repeatedly finds the minimum element from the unsorted part
  of the array and moves it to the beginning.
- The array is divided into a sorted and unsorted region; the sorted region grows
  from left to right.

How it works:
1. Start from the first element as the minimum.
2. Compare it with the rest of the array to find the actual minimum.
3. Swap it with the first element.
4. Repeat for the remaining unsorted array.

good points:
- Simple and easy to understand.
- Performs well on small arrays.

bad points:
- Time complexity is O(n^2), even for sorted arrays.
- Not very efficient for large arrays.

Time Complexity:
- Best, Average, Worst case: O(n^2)

Space Complexity:
- O(1) (in-place sorting)
*/




function selectionSort(arr) {
    let n = arr.length;        // get array length

    for (let i = 0; i < n - 1; ++i) {
        let minIndex = i;      // assume the first element is the minimum

        for (let j = i + 1; j < n; ++j) {
            
            if (arr[j] < arr[minIndex]) {
                minIndex = j;   // store index of new minimum
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
        }
    }

    return arr;
}

// Example usages:
console.log(selectionSort([5, 3, 8, 1, 4]));       // [1, 3, 4, 5, 8]
console.log(selectionSort([10, 9, 8, 7, 6]));      // [6, 7, 8, 9, 10]
console.log(selectionSort([1, 2, 3, 4, 5]));       // [1, 2, 3, 4, 5] (already sorted)
console.log(selectionSort([4, 2, 5, 3, 1]));       // [1, 2, 3, 4, 5]
console.log(selectionSort([20, -5, 15, 0, 10]));   // [-5, 0, 10, 15, 20]
