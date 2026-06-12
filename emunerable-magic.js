// Create a function that accepts a sequence and a non-negative integer n, and returns a sequence of the first n elements 
// from it.

// If the sequence has fewer than n elements, return all of them

function take(arr, n){
    return arr.slice(0, n)
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");