/*
    Array: Binary Search (non recursive)

    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .

    Bonus:
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete

        return how many times the given number occurs

    Visualization tool: https://yongdanielliang.github.io/animation/web/BinarySearchNew.html
*/

//! DOWNLOAD 'BETTER COMMENTS' TO SEE COMMENT COLORS CHANGE
/*
Name: Better Comments
Id: aaron-bond.better-comments
Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
Version: 3.0.2
Publisher: Aaron Bond
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
*/


//! HOW TO START AND END THE WORK ASKED FOR THIS PROBLEM BELOW
//! Array: Binary Search (non recursive)

//? Inputs:
//? - array: A sorted array of numbers
//? - target_value: The value to search for in the array

//? Output:
//? - Boolean indicating whether the target_value is present in the array
//? - Bonus: Count of occurrences of the target_value in the array

//! Steps:
//* 1. Initialize variables:
//*     - start: Index of the first element in the array (0)
//*     - end: Index of the last element in the array (array.length - 1)
//*     - freqCounted: Variable to store the count of occurrences of the target_value (for bonus)

//* 2. Perform Binary Search:
//*     a. While start index is less than or equal to end index:
//*         - Calculate mid index as the floor of (start + end) / 2
//*         - If the middle element (arr[mid]) is equal to target_value:
//*             - Return true if not calculating occurrences (for non-bonus)
//*             - If calculating occurrences (for bonus):
//*                 - Initialize freqCounted to 1 (as one occurrence is found)
//*                 - Iterate through the left side of mid to find occurrences until a different value is encountered
//*                 - Iterate through the right side of mid to find occurrences until a different value is encountered
//*                 - Return freqCounted (total occurrences)
//*         - If target_value is greater than arr[mid]:
//*             - Update start to mid + 1 (search the right half)
//*         - If target_value is less than arr[mid]:
//*             - Update end to mid - 1 (search the left half)

//* 3. If the while loop completes without finding the target_value, return false

//* 4. For the bonus problem, if the target_value is not found, return 0 for the count of occurrences.



//! ALL LINKS AND RESOURCES NEEDED TO SOLVE THIS PROBLEM BELOW
//! Binary Search:
//? MDN Web Docs: Array.prototype.indexOf()
//? This method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//? MDN Web Docs: Array.prototype.includes()
//? This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

//! Frequency Counter:
//? MDN Web Docs: Array
//? The Array object represents an ordered collection of elements and is widely used in JavaScript.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//? MDN Web Docs: Objects and properties
//? JavaScript objects can be thought of as simple collections of name-value pairs.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

//! While Loops:
//? MDN Web Docs: while statement
//? The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

//! Helper Functions:
//? MDN Web Docs: Functions
//? JavaScript functions are blocks of code designed to perform a particular task.
//? Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions



//! EDGE CASES FOR ALGO PROBLEM
const numbers1 = [1, 3, 5, 6];
const searchNumber1 = 4;
const expected1 = false;

const numbers2 = [4, 5, 6, 8, 12];
const searchNumber2 = 5;
const expected2 = true;

const numbers3 = [3, 4, 6, 8, 12];
const searchNumber3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const numbers4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNumber4 = 2;
const expected4 = 4;





//! START OF ALGO

let freqCounter = (arr, target) => {
    //! Option 1
    let answer = 0;

    for (let num of arr) {
        if (num === target) {
            answer++;
        }
    }
    return answer;


    //! Option 2 for frequency counter
    // let answer = {};
    //! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    //? Of any array = Iterate an array ONLY
    // for (let num of array) {
    //     if (answer[num] === undefined) {
    //         answer[num] = 1; // If not found, initialize to 1
    //     } else {
    //         answer[num] += 1; // If found, increment count
    //     }
    // }
    // return answer;
};

//! Test cases for freqCounter
// console.log(freqCounter(numbers1))
// console.log(freqCounter(numbers2))
// console.log(freqCounter(numbers3))


function binarySearch(arr, target_value) {
    let start = 0;
    let end = arr.length - 1;
    let freqCounted;

    //! Frequency Counter
    //? Count occurrences of each number in the array using a frequency counter approach.
    //? This is done by iterating through the array and storing the count of each number in an object.
    freqCounted = freqCounter(arr, target_value);

    //! Real Binary Search
    //? Perform a binary search on the sorted array to find the target value efficiently.
    //? The algorithm repeatedly divides the search interval in half until the target value is found or the interval is empty.
    //? If the middle element is the target value, return true.
    //? If the target value is greater than the middle element, search the right half of the array.
    //? If the target value is less than the middle element, search the left half of the array.

    //! Real Binary Search
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target_value) {
            return freqCounted;
        } else if (arr[mid] < target_value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;


    //! Not Binary Search FAKE!
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === target_value) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

}

//! Test cases for binarySearch
console.log(binarySearch(numbers1, searchNumber1))
console.log(binarySearch(numbers2, searchNumber2))
console.log(binarySearch(numbers3, searchNumber3))
console.log(binarySearch(numbers4, searchNumber4)) // Bon
/*****************************************************************************/
