// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str){
    let vowelCounts = 0;
    const vowels = "aeiou";
    for(let char of str){
        if(vowels.includes(char)){
            vowelCounts++
        }
    }
    return vowelCounts
}

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }
  
//   return vowelsCount;
// }

console.log(getCount("abracadabra"), 5)