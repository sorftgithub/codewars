// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints){
    let newArr = 0
    for(let i = 0; i < classPoints.length; i++){
        newArr += classPoints[i]
    }
    let average = newArr / classPoints.length
    if(average > yourPoints){
        return false
    }else{
        return true
    }
}


console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false)
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);