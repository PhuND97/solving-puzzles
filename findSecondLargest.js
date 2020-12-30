/*
    There is an array of integer number.
    Find a sencond largest number in array.
*/

let numbers = [6, 1, 2, 3, 7, 7, 2, 3, 4, 5, 3, 6];
function findSecondLargest(arr) {
    let largestNum = arr[0];
    let secondLargestNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = arr[i];
        } else if (arr[i] > secondLargestNum && arr[i] < largestNum) {
            secondLargestNum = arr[i];
        }
    }
    
    return secondLargestNum;
}

console.log(findSecondLargest(numbers));