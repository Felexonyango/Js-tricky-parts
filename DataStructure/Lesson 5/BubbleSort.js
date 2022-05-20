// bubble sort algorithm compares every two adjacent values and swaps them
// if the first one is bigger than the second one.



function bubbleSort(arr){
  
for(let i=0; i<arr.length -1; i++){

for(let j=0; j<arr.length -1 -i ; j++){
    if(arr[j] > arr[j + 1]){
        
    const temp = arr[j];
    arr[j] = arr[j + 1];

    arr[j + 1] = temp
   


    }
}
    
}
return arr


}
 console.log(bubbleSort([50,23,90,40,10,5,45,21,100,1]))