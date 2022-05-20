//Is a list of elements that are linked  to each other .Every element knows about the next element
//use for memory management 


class LinkedList{
constructor(){
this.head=null //first element
this.tail=null //last element
}
// to add something to the list


append(value){

    const newNode ={ value, next:null}
  
    if(this.tail){
        this.tail.next=newNode 
    }
    this.tail = newNode

    if(!this.head){
        this.head=newNode
    }
}

prepend(value){

    const newNode ={ value, next:this.head} 
    this.head = newNode

    if(!this.tail){
        this.tail=newNode

    }

}
delete(value){
if(!this.head){
    return;
}
while(this.head  && this.head.value===value){
    this.head=this.head.next

}

let currNode =this.head
while(currNode.next){
    if(currNode.next.value===value){
        currNode =currNode.next.next;
    }
    else{
        currNode=currNode.next
    }

}

 if (this.tail.value===value){
    this.tail.value =currNode
}

}


getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}

getFirst() {
    return this.head;
}

clear() {
    this.head = null;
}

toArray(){
    const elements =[]
    let curNode =this.head
    while(curNode){
        elements.push(curNode)
        curNode = curNode.next

    }
    return elements;
}

}

const l1 =new LinkedList()
l1.append(1)
l1.append("Hello world") 
l1.append("Felex")
l1.append(true)
l1.append(18.52) //lat element
l1.prepend("First value") //first element
console.log(l1.toArray())

// l1.delete("Felex")
l1.delete("First value")

console.log(l1.toArray())

console.log(l1.getLast())

console.log(l1.getFirst())

console.log(l1.clear())