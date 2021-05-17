// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

let count=0;
const vowels=['a','e','i','o','u']
for(let s of str.split('') ){

  if(vowels.includes(s.toLowerCase())) count++
}

return count
}


// function vowels(str) {
// matches= str.toLowerCase().match(/a|e|i|o|u/)
//
// console.log(matches);
// }
//
// console.log(vowels('hEllo'))
module.exports = vowels;
