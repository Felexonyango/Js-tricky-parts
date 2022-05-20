// Recursion is the process of repeating items in a self-similar way. In programming languages, 
//if a program allows you to call a function inside the same function,
// then it is called a recursive call of the function.


function factorial(n){

    if(n==1 || n==0){

        return 1;
    }
    else {

        return n *factorial(n-1)
    } 


}
console.log(factorial(4))