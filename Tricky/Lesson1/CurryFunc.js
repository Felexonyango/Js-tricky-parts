
//function currying
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return function(c) {
  
          return f(a, b,c);
        }
    
      };
    };
  }
  
  function sum(a, b,c) {
    return a + b+c;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(3)(3)(3) ); //9
  
  