
//Binary search is an efficient algorithm for finding an item from a sorted list of items. 
//It works by repeatedly dividing in half the portion of the list that could contain the item, 
//until you've narrowed down the possible locations to just one.

let arr = [1,2,3,4,5,6,7,8,9,10];

function BinarySearch(arr,  element) {
 
    let start = 0;
    let end = arr.length -1;

    let middle = Math.floor((start + end)/2);

    while(arr[middle] !== element && start <= end) {

        if(arr[middle] < element){

            start = middle + 1;
        }
        else end = middle - 1;
         
         middle = Math.floor((start + end)/2);
        
    }
    return arr[middle]===element ? middle : -1;

}

console.log(BinarySearch(arr,9))
