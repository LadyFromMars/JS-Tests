const Calculate = {
  factorial(inputNumber) {


    // If input is 0
 if (inputNumber === 0) {
   return 1;
 }

    //Checks If input is a number

    else if (typeof inputNumber == 'number')
   {
   for (let i = inputNumber - 1; i > 0; i--) {
  inputNumber  *= i; }

return inputNumber;
 }

    // in input is NOT a number

    else { 
 throw SyntaxError;
}
  }}

module.exports = Calculate;
