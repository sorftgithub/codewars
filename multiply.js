// This code does not execute properly. Try to figure out why.

function multiply(a, b){
 return a * b
}
 
let multiply2 = (a, b) => a * b

    console.log(multiply2(1,1), 1);
    console.log(multiply2(2,1), 2);
    console.log(multiply2(2,2), 4);
    console.log(multiply2(3,5), 15); 
    console.log(multiply2(5,0), 0);
    console.log(multiply2(0,5), 0);
    console.log(multiply2(0,0), 0); 


