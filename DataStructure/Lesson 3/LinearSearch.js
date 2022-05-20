let arr = [1,2,3,4,5,6,7,8,9,10];

function linearSearch(arr, element) {

for(let i = 0; i < arr.length; i++) {

    if(arr[i] === element) {

        return i;
    }

}
 // Elementnot found in the array.
return -1;
}
console.log(linearSearch(arr, 5))