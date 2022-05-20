// MAP
const resultdata = new Map()

resultdata.set('Average', 12)
resultdata.set('Hello', null)


const country ={
name:'kenya',
population:3456
}
resultdata.set(country,0.89)
 for(const el of resultdata){

    console.log(el)

 }
 resultdata.delete('Hello')
 console.log(resultdata)
