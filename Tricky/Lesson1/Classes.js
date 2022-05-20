

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
  
  