// Your goal is to write a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. 
// For strings with exactly 2 characters, return an empty string.

// function removeChar(str){
//         return str.slice(1, -1);
// }

let removeChar = (str) => str.slice(1, -1)

    console.log(removeChar('eloquent'), 'loquen');
    console.log(removeChar('country'), 'ountr');
    console.log(removeChar('person'), 'erso');
    console.log(removeChar('place'), 'lac');
    console.log(removeChar('ooopsss'), 'oopss');