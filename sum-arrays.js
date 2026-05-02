// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative. If the array is empty, return 0.

function sum(numbers){
    let result = 0
    numbers.forEach(items => result += items )
    // for(let i = 0; i < numbers.length; i++){
    //     result += numbers[i]
    // }
    return result
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);