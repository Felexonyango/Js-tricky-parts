// A stack is a data structure that holds a list of elements.
// A stack works based on the LIFO principle i.e., Last In, First out,
// meaning that the most recently added element is the first one to remove.

class Stack {
    constructor(){
        this.items = [];
        this.count =0;

    }
    // Add elements to the stack
 push(element){
        this.items[this.count]=element;
        console.log(`${element} added to ${this.count}`);
        this.count +=1
        return  this.count -1

    }

    //Return and remove top element from the stack
    //return undefined if  stack is empty
 pop(){

if(this.count == 0) return undefined
   let deleteItem = this.items[this.count - 1]
   console.log(`${deleteItem } removed`)
   this.count -= 1
   return deleteItem


    }

//check top element in stack
 peek(){
console.log(`Top element in stack is ${this.items[this.count -1]}`)

}



}
const stack = new Stack();
stack.push(10)

stack.push(20) 
stack.peek()
stack.push(30)


//removes 50
stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())