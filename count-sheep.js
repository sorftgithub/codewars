/*Consider an array/list of sheep where some sheep may be missing from their place.
 We need a function that counts the number of sheep present in the array (true means present).*/

 function countSheeps(sheep){
    return sheep.filter(Boolean).length;
 }

 /*function countSheeps(sheep){
    return sheep.reduce((count, sheep) => {
        if (sheep === true) count++;
        return count;                                                                                                                                                                                                                                                                                                 
    }, 0)
 }*/


 // Example usage:
const sheep = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true];

console.log(countSheeps(sheep), 17); // 17