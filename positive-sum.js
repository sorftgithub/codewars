// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr){
    let total = 0
    for (let num of arr){
         if (num > 0){
            total += num;
         }
    }
    return total;
}

    
    console.log(positiveSum([1,2,3,4,5]),15);
    console.log(positiveSum([1,-2,3,4,5]),13);
    console.log(positiveSum([]),0);
    console.log(positiveSum([-1,-2,-3,-4,-5]),0);
    console.log(positiveSum([-1,2,3,4,-5]),9);
   