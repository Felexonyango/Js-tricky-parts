
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