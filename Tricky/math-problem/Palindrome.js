//Given  an interger x ,return  true if  x is palindrome,fale otherise
//An integer is palindrome  when it reads the same  backwards as forwards 
//example  121 is a palindrome   while 123 is not a palindrome

function isPalindrome(num){

    const n =num

    if(n<0 || n>2**32){
        return false
    }

    let rev=0

    while(num>0){
        let digit =  num%10
        rev =rev*10 + digit 
        num =parseInt(num /10)
    }
    if(rev===n){
        return true
    }
    else{
        return false
    }

}
console.log(isPalindrome(121))