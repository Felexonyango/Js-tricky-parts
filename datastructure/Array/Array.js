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

//sets

const ids =new Set()
ids.add('hello')
ids.add(1)
ids.add('hello world')
ids.add(1)

for(const el of ids){
    console.log(el)   
}


console.log(ids.has('hello world'))
ids.delete('hello')
console.log(ids)