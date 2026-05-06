// Write a function which calculates the average of the numbers in a given array.

function findAverage(array){
    if(array.length === 0) return 0;
    // let sum = 0
    // for(let i = 0; i < array.length; i++){
    //     sum += array[i]
    // }

    // return sum/array.length

    const total = array.reduce((a,b)=> a + b, 0)
    return total / array.length
}


    console.log(findAverage([1,1,1]), 1);
    console.log(findAverage([1,2,3]), 2);
    console.log(findAverage([1,2,3,4]), 2.5);