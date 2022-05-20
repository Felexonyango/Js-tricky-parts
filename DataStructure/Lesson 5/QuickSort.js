
// Quicksort is a divide-and-conquer algorithm. It works by 
// selecting a 'pivot' element from the array and partitioning the other 
// elements into two sub-arrays,
//  according to whether they are less than or greater than the pivot. 

// For this reason, it is sometimes called partition-exchange sort.

function Quicksort(array){
    if(array.length ===1){

        return array
    }
        const pivot=array[array.length -1];
        const leftarray=[]
        const rightarray=[]

        for(let i=0;i<array.length - 1;i++){

        if(array[i]<pivot){
           leftarray.push(array[i])
       }
       else{
           rightarray.push(array[i])
       }

        }
        if(leftarray.length >0 && rightarray.length >0){
            return [...Quicksort(leftarray), pivot, ...Quicksort(rightarray)]

        }
         else if(leftarray.length>0){
            return [...Quicksort(leftarray), pivot]
        }
        else{
            return [pivot, ...Quicksort(rightarray)]
        }

        
    }
   



const arry =[50,23,90,40,10,5,45,21,100,1,58,90,32]
console.log(Quicksort(arry))