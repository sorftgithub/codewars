// Write a function that accepts a no-negative integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
    return s.repeat(n);
}

// function repeatStr(n, s) {
//     let result = "";
//     for (let i = 0, i < n; i++){
//         result += s;
//     }
//     return result;
// }



    console.log(repeatStr(3, "*"), "***");
    console.log(repeatStr(5, "#"), "#####");
    console.log(repeatStr(2, "ha "), "ha ha ");
    console.log(repeatStr(0, ""), "");
    console.log(repeatStr(0, "I"), "");
    console.log(repeatStr(5, ""), "");
    console.log(repeatStr(6, "I"), "IIIIII");
    console.log(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");