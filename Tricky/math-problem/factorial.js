
// a series of numbers in which each number 
//is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
function factorial(number) {
  let result = 1;
  
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

