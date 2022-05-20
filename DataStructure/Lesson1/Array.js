
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



//sort arrays 
const numbers =[50,23,90,40,10,5,45,21,100,1,58,90,32]

//use compareFuc as a callback 
 numbers.sort(compareFunc)


console.log(numbers)

function compareFunc(a,b){

    return a-b


}

// using objects to sort products'
const Products =[

{
    name:"sukuma",
    price:30,
    status:true
},
{
    name:"rice",
    price:20,
    status:true
},
{
    name:"Milk",
    price:70,
    status:true
}

]

Products.sort((a,b)=>{

    return a.price -b.price
})
console.log(Products)

//InterView Question


//median of two sorted arrays that are already sorted

// combine arrays =>sort =>even or odd len =>findMidNumber

 function sortArrays(nums1,nums2){
     const totalArray =[...nums1, ...nums2].sort((a,b)=> a-b)

     const mp = Math.floor(totalArray.length/2)
 
     if(totalArray %2 !==0){

         return totalArray[mp]


     }
     else{
        return (totalArray[mp] +totalArray[mp-1])/2
     }

    }

     const nums1=[1,3,4]
     const nums2=[2]

     console.log(sortArrays(nums1,nums2))
