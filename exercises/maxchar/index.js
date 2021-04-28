// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
//create placeholder max letter
  var max={num: 0, letter: ''};

  //create empty map
  charMap={};

//add characters and count to map
  for (let char of str.split('')){
    if (!charMap[char]) {charMap[char]=1; max.letter=char;}

    else if(charMap[char]> max.num){
      //check if it is higher than max, and set the max
       max.num=charMap[char]
       max.letter=char
      charMap[char]++
}
  }

return max.letter

}

function maxChar2(str) {
//create placeholder max letter
  var max={num: 0, letter: ''};

  //create empty map
  charMap={};

//add characters and count to map
  for (let char of str.split('')){
    if (!charMap[char]) charMap[char]=1;

    else


      charMap[char]++
}

for (let char in charMap){

  if (charMap[char]>max.num){
    max.num=charMap[char]
    max.letter=char
  }
}

return max.letter

  }


console.log(maxChar('abcdefghijklmnaaaaa'))
module.exports = maxChar;
