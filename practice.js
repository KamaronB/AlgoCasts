function findFirstDuplicate(string){

let arr=string.toLowerCase().split('')
let strMap={}
for(let elem of arr){
  if(strMap[elem]>1){
    return elem
  }
  else strMap[elem]= strMap[elem] + 1 || 1
}
return strMap
}

// console.log(findFirstDuplicate('ABCDEFG'))



function reverseString(string){
let newString='';
  for(let letter of string.split('')){
    newString= letter+newString
  }

  return newString
}
console.log(reverseString('Kamaron'))

// var findMedianSortedArrays = function(nums1, nums2) {
//
//     nums1.forEach((num)=>nums2.push(num))
//
//     sortedNums=nums2.sort(function(a,b){return a-b})
//
//     if(sortedNums.length%2==0){
//
//         return (sortedNums[sortedNums.length/2]+sortedNums[sortedNums.length/2-1])/2
//     }
//     else{
//         return (sortedNums[(sortedNums.length-1)/2])
//     }
//
//
// };
//
// console.log(findMedianSortedArrays([1,3],[2]));


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s) {
//      arr=[];
//      max=0;
//      s=s.split('')
//
//      while(s.length>0){
//      for(let i=0;i<s.length;i++){
//          if(arr.includes(s[i]) ){
//              arr=[];
//              s.shift()
//              break;
//          }
//
//          arr.push(s[i])
//       if(arr.length>max){
//
//           max=arr.length
//      }
//
//
//
//      }
//
//
// }
//
// return max
//  };



// console.log(lengthOfLongestSubstring("pwwkew"))
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     let arr1=[];
//     let arr2=[];
//     let l3;
//     let head=null
//
//
//
// while(l1.next||l2.next){
//
//
//     if(l1.val){
//     arr1.push(l1.val)
//
//         if(l1.next){
//             l1=l1.next
//         }
//     }
//      if(l2.val){
//     arr2.push(l2.val)
//
//         if(l2.next){
//             l2=l2.next
//         }
//     }
//
//
//
// }
//
// arr1.push(l1.val)
// arr2.push(l2.val)
//
// for(let value of (parseInt(arr1.join(''))+parseInt(arr2.join(''))).toString().split('')){
//      l3=new ListNode(value,head)
//     head=l3
//
// }
// return l3
// };

// function findClosestValueInBst(tree, target) {
//   // Write your code here.
//
// console.log(tree)
// }
//
// // This is the class of the input tree. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
//
//
// findClosestValueInBst({
//   "nodes": [
//     {"id": "10", "left": "5", "right": "15", "value": 10},
//     {"id": "15", "left": "13", "right": "22", "value": 15},
//     {"id": "22", "left": null, "right": null, "value": 22},
//     {"id": "13", "left": null, "right": "14", "value": 13},
//     {"id": "14", "left": null, "right": null, "value": 14},
//     {"id": "5", "left": "2", "right": "5-2", "value": 5},
//     {"id": "5-2", "left": null, "right": null, "value": 5},
//     {"id": "2", "left": "1", "right": null, "value": 2},
//     {"id": "1", "left": null, "right": null, "value": 1}
//   ],
//   "root": "10"
// }, 12)
//
// // Do not edit the line below.
// exports.findClosestValueInBst = findClosestValueInBst;
