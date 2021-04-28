// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//  return str==str.split('').reverse().join('')
// }

function palindrome(str){
  str2= str.split('')
  while (str2.length > 1)
  {
  if (str2[0]=== str2[str2.length-1] ){
    console.log(str2[0] +', ' + str2[str.length-1])

    str2.splice(0,1)
    str2.splice(str2.length-1,1)
    palindrome(str2.join(''))
  }
    else
    return false
}

return true
}

module.exports = palindrome;
