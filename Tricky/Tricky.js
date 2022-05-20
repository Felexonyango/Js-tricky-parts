
//closure ..nesting functions

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




function Person(email,age){
  this.email=email,
  this.age=age
}
 const person1= new Person('Felex@gmail.com',24)
 console.log(person1.email)


// order of precedence


//Prototypes shares properties across  instances
 Person.prototype.getDetails=function(){

  return this.email + '  '+ this.age
 }
 console.log(person1.getDetails())



 // Classes and inheritance

 class Man{

  constructor(fname,lname){

    this.fname=fname,
    this.lname=lname

  }

sayMan (){

return this.fname + "  " + this.lname

}

}
const man1= new Man('felex', 'onyango')
console.log(man1.fname, man1.lname)



//Normal function
function normalfunc(){

  console.log('Hello')
  console.log('word')

}
normalfunc()


//genetor function

function* generateFunction(){

  yield 'Hello',
  yield 'word'
}
 const generate = generateFunction()
 
 for (const word of generate){
   console.log(word)
 }

 //input
 const myform =document.querySelector('#myform')
 const nameinput= document.querySelector('#name')
 const emailinput= document.querySelector('#email')

 myform.addEventListener('submit',Submit)
 
 function Submit(e){
   e.preventDefault()
   console.log(nameinput.value)

 }


 