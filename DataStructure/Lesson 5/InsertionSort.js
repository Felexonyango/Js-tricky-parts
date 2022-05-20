// In Insertion sort, you compare the key element with the previous elements.
// If the previous elements are greater than the key element, 
//then you move the previous element to the next position.

function insertionSort(arr){
    for(let i=0; i<arr.length; i++){

        for(let j=i; j>0; j--){
         if(arr[j] <arr[j-1]){

        
            //  const temp = arr[j];
            //  arr[j] = arr[j-1];
            //  arr[j-1] = temp;

             [arr[j], arr[j-1] = arr[j-1], arr[j]];

         }
         else {
             break;
         }
        }
    }

return arr


}
 console.log(insertionSort([50,23,90,40,10,5]))