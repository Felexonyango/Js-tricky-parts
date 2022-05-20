//same as Linked List but uses FIFO Principle
 class Queue{
 constructor(){
   this.items = [];

 }

 //add elements to the queue
 enqueue(item){
   this.items.push(item);

 }
 dequeue(){

  return  this.items.shift()
 }
//first element in a queue 
 peek(){
     
 return  this.items[0]

 }

 getSize(){

  return  this.items.length;

 }
 isEmpty(){

    return this.getSize() ===0;

 }

}
const queue =new Queue();
queue.enqueue("Hello queue");
queue.enqueue("Hello javascript");
queue.enqueue("Hello devs");
queue.enqueue("Hello");
console.log(queue);

console.log(queue.dequeue());

console.log(queue.peek());
