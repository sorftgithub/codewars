/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// receive string
// length check
// check if its a number once converted. convert to num, then check if its a number.
// return true if it passes length check and is a number
// else return false

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

//p: pass in numbers
//R: must be a string of 4 numbers
//E:

function validatePin(pin) {
  //return true or false
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
  return true;
}

console.log(validatePin("1234")); //True
console.log(validatePin("12345")); //False
console.log(validatePin("123a")); //False
console.log(validatePin("123abc")); //False

console.log(validatePin("-1.234")); //false
console.log(validatePin(".234")); //False
console.log(validatePin("0000")); //true
