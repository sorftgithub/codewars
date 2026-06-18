// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

function highAndLow(numbers){
    let numArr = numbers.split(' ').map(Number)
    let x = Math.max(...numArr)
    let y = Math.min(...numArr)
    return(`${x} ${y}`)
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1")