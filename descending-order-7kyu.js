// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits
//  in descending order. Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
    let bigToSmall = String(n).split('').sort((a,b) => b-a).join('')
    return Number(bigToSmall)
}



    console.log(descendingOrder(0), 0)
    console.log(descendingOrder(1), 1)
    console.log(descendingOrder(111), 111)
    console.log(descendingOrder(15), 51)
    console.log(descendingOrder(1021), 2110)
    console.log(descendingOrder(123456789), 987654321)