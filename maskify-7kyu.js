/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret 
question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. */

// p: string
// R: string of # and number
// E: 
function maskify(cc){
if(cc.length <=4 ) return cc
// let standAlone = cc.split('')
// const hidden = standAlone.slice(0, standAlone.length - 4).map(char => '#' ).join("")
// const shown = standAlone.slice(standAlone.length - 4).join("")
// const result = (hidden + shown)
// console.log(hidden)
// console.log(shown)
const shown = cc.slice(cc.length - 4)

const result = shown.padStart(cc.length, "#")
return result
}


console.log(maskify('12345657893439')) //, #########3439
console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111')