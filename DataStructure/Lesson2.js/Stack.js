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
//ckeck if stack is empty
isEmpty(){

    console.log(this.count == 0 ? "Stack is empty":"Stack is not empty")
    return this.count == 0
}

size(){
    console.log(` ${ this.count} element is stack`)
}
clear(){
    this.items =[]
    this.count = 0
    console.log(`Stack is cleared`)
    return this.items

}

//Print elemnts in stack
print(){

    let str=''
    for(let i=0;i<this.count;i++){
    str+=this.items[i]  +   ''
    }
    return str ;

}


}
const stack = new Stack();
stack.push(10)

stack.push(20) 
stack.peek()
stack.push(30)
console.log(stack.print())



//removes 50
stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())
console.log(stack.print())

stack.isEmpty()
stack.size()

stack.clear()