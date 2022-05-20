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
l1.append(18.52)
console.log(l1.toArray())