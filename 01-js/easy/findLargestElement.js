/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxn = numbers[0];
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > maxn){
            maxn = numbers[i];
        }      
    }
    return maxn;
    
}

module.exports = findLargestElement;