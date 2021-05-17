// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor(){
    this.data=new Stack();
    this.data2=new Stack();
    this.next='';




  }

  add(elem){

    this.data.push(elem)



  }
  remove(){

    while(this.data.peek()){

      this.data2.push(this.data.pop())
    }
    this.next=this.data2.pop()
    while(this.data2.peek()){

      this.data.push(this.data2.pop())
    }
    return this.next

  }

  peek(){
    while(this.data.peek()){

      this.data2.push(this.data.pop())
    }
    const record =this.data2.peek()
    while(this.data2.peek()){

      this.data.push(this.data2.pop())
    }
    return record
}
}




module.exports = Queue;
