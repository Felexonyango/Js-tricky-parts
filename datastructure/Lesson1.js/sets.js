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
