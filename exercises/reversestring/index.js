// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

//reverse characters in given string

return str.split('').reverse().join('')
}

// function reverse2(str) {
//
// //reverse characters in given string
// rev=''
// for (let l of str.split('')) rev=l+rev
// debugger;
// }
// reverse2('the')
reverse('abcd')
module.exports = reverse;
