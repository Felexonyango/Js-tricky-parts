
//arrays

 const  names =["Felex","onyango","Tabu","Kucha"]
 console.log(names[1])
 console.log(names.length)


 for(const el of names){
     console.log(el)
 }
 names.push("Faith")


const faithIndex= names.findIndex(el=>el ===  "Faith")
names.splice(2,1)
console.log(names)


 


