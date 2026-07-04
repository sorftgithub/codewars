// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str){
    const caseStr = str.toLowerCase()
    let xCount = 0
    let oCount = 0
    for(let char of caseStr){
        if(char === 'x'){
            xCount++
        }else if(char === 'o'){
            oCount++
        }
    }
    return xCount === oCount
}


console.log(XO("ooxx"), true);      
console.log(XO("xooxx"), false);     
console.log(XO("ooxXm"),true);     
console.log(XO("zpzpzpp"), true);  
console.log(XO("zzooXMsx"), false);  