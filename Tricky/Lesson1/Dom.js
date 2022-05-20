



 //input
 const myform =document.querySelector('#myform')
 const nameinput= document.querySelector('#name')
 const emailinput= document.querySelector('#email')

 myform.addEventListener('submit',Submit)
 
 function Submit(e){
   e.preventDefault()
   console.log(nameinput.value)

 }


 