// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data,next=null){
    this.data=data;
    this.next=next;


  }

}

class LinkedList {

  constructor(){
    this.head=null
    // this.length=0;
  }

  insertFirst(data){

    this.head=new Node(data,this.head);

    // this.length++
  }

  size(){
    let count=0;
    let current=this.head
    while(current){
      count++
      current=current.next
    }
    return count
  }

  getFirst(){

    return this.head
  }
  getLast(){
    let current=this.head
    while(current){
      if(current.next==null){

        break
      }

      current=current.next
    }
    return current
  }

  clear(){

    this.head=null
  }

  removeFirst(){

    this.head=this.head.next
  }


  removeLast(){
    let current=this.head


    while(current){

    if(!current.next){
        this.head=null
        break
      }
    else if(current.next.next==null){

        current.next=null
        break
      }

      current=current.next
    }


  }


insertLast(data){
  let last=this.getLast()
  if(last)last.next=new Node(data)

  else this.head= new Node(data)
}

  getAt(n){
    let current=this.head
    let count=0
    while(current&&count<n){

    current=current.next
    count++
    }
    return current

  }


  removeAt(n){
    let current=this.head
    let count=0
     if(n>this.size()){
       this.removeLast()
     }
     else if(n<this.size()) this.removeFirst()

try{
    while(current){
      if(count==n-1){
        current.next=current.next.next
        break
      }
current=current.next

      }
}
catch{
  console.log("out of bounds")
}


  }



  insertAt(data,n){
let current=this.head
let count=0
if(n>this.size()){
  this.insertLast()
}

    while(current){
      if(count==n){
        current=new Node(data,current.next)
        break
      }
current=current.next

      }

  }



}


const l = new LinkedList();
console.log(l.size())

  l.insertFirst(1);




module.exports = { Node, LinkedList };
