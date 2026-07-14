/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them 
and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
 */

function getSum(a, b) {
  if (a === b) return a;

  const sorted = [a, b].sort((a, b) => a - b);


  let sum = 0;

  for (let i = sorted[0]; i <= sorted[1]; i++) {
    sum += i;
  }

//   console.log(sum);
//   //  console.log(x, y, sorted)

  return sum;
}

console.log(getSum(2, -5));
console.log(getSum(1, 3));
console.log(getSum(7, 3));
