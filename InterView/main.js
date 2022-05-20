// Question 1
//Diff between let and var

//1)// Var gets hoisted at the top of the function  scope unlike let doesn't get hoisted at the top of func
   
//Exaple For Var
console.log(value);

    var value = 10;
 

    // Example for Let
 console.log(letVar);

let letVar = 10; 
//response ->main.js:12 Uncaught ReferenceError: Cannot access 'letVar' before initialization




//// Let is define in blocked scope while var in functional scope
//example 
function testVar () {
    if(true) {
      var foo = 'foo';
    }
  
    console.log(foo);
  }
  
  testVar();  
  // logs 'foo'
  
  
  function testLet () {
    if(true) {
      let bar = 'bar';
    }
  
    console.log(bar);
  }
  
  testLet(); 
  // reference error
  
//  Question 2

// difference between === and ==

// They are both comparison operators 
// == compares value only while  ===compares the value and type



//  Question 3
//Diff between let and const

// const cannot be reassigned unlike let can be reassigned 
//const must be intialized  during decalaration unlike the let 

// //  Question 4
// Difference between null and undefined


// null is  an object while undefined  is empty 
// typeof null =>Object
// typeof of undefined =>undefined

//   Question 5
//What is   Arrow function
// Arrows function prevent "this" bugs as does not work with constructors


//  Question 6
// what is prototype based  inheritance


// The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
// It is a method by which an object can inherit the properties and methods of another object.

function Person(email,age){
  this.email=email,
  this.age=age
}

//Prototype shares properties across  instances
 Person.prototype.getDetails=function(){

  return this.email + '  '+ this.age
 }

 const person1= new Person('Felex@gmail.com',24)


 console.log(person1.getDetails())

 // Question 7

 // difference between functional declaration and functional exppression

 console.log(Func())
 console.log(Hello())

  function Func(){
    console.log("Hello")
  }
   let Hello =function(){

    console.log("Hello")

   } 

   //Answer
   //Syntax is difference
   // Function expression is annonymous function that is saved in a variable
   //Function expression behaves as a variable and therefore cannot be  
   // accessed on the top of the function unlike function declaration can be accessed on the top


   //Question 8

  //  What is promises and why do we use it

  //To make async calls which has to wait  something to happen  and then when to come back
  //You execute callback function  and within callback you might do another 

  let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

     //Question 9

    //SetTimeout
     
    setTimeout(()=>{
     console.log('Interval')
    },0)


     //Question 10
     //What is closure and how to use it

  // A closure is the combination of a function bundled together (enclosed) with references
  // to its surrounding state (the lexical environment). 

let a =10;

function outer(){
  
  let b =20

  function inner(){

    let c =30

    console.log(a,b,c)
  }
  inner()
}
outer()
