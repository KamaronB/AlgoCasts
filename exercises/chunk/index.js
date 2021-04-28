// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
// const arr=[];
// const arr2=[];
//

// for (let i=0; i < array.length; i++){
//   //push the first given item in array into new array
//     arr.push(array[i]);
//     //check to see if the array is at a multiple of size
//       if (array[i]%size===0){
//       //push new array into array of arrays
//         arr2.push(arr);
//       //set new array blank
//         arr=[];
//       }
//   }
// //push the last items in the array if there are any left
//   if (arr.length!=0) arr2.push(arr);
//   return arr2
// }
//
//
//
// function chunk(array, size) {
// const chunked=[]
//
//
// for (let element of array){
//   const last = chunked[chunked.length-1]
// if (!last|| last.length==size){
//   chunked.push([element])
// }
// else{
//   last.push(element)
//     }
//   }
//   return chunked
// }

function chunk(array, size) {
const chunked=[];

var index=0;

while (index < array.length){
  console.log(index)
  console.log(array.slice(index,size+index))
  chunked.push(array.slice(index,size+index))
  index+=size
}
return chunked
//return chunked
}
 console.log(chunk([1,2,3,4,5,6,7,8,9],2))
module.exports = chunk;
