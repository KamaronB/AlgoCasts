// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {


let aMap=createCharMap(stringA);
let bMap=createCharMap(stringB);


//if they are not the same length they are not anagrams
if (Object.keys(aMap).length!== Object.keys(bMap).length) return false;

else{

for (let key in aMap ){
//check if exists in bMap and value is the same
  if(bMap[key]&& bMap[key]===aMap[key]) return true



}


}


return false
}


//create helper function to no repeat yourself. Do not type two separate loops

function createCharMap(string){
  /* loop through create characterMap
 and remove punctuation , spaces and make both strings lower case

*/

  charMap={};
  for  (let letter of string.replace(/[^\w\s]|_/g, "").toLowerCase().split('')){
  charMap[letter]= charMap[letter] +1 || 1;


  }

  return charMap;


}



function anagrams2(stringA,stringB){
  //sort string in array then check to see if sorted strings are equal
  stringA= stringA.replace(/[^\w\s]|_/g, "").toLowerCase().split('').sort().join('')
  stringB= stringB.replace(/[^\w\s]|_/g, "").toLowerCase().split('').sort().join('')

  console.log(stringA,stringB)

  if (stringA===stringB) return true

  return false

}

console.log(anagrams2("Hello!","elloh"))



module.exports = anagrams;
