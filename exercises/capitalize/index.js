// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

let capString=''
for (let word of str.split(' ')){

capString+= word.slice(0,1).toUpperCase() + word.slice(1)+ ' '
}

return capString.split(' ').filter(word => word.length > 0).join(' ')
}
console.log(capitalize("hi there, how is it going?"))


// function songDecoder(song){
//   return song.split('WUB').filter(word => word.length > 0).join(' ')
// }
//
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
module.exports = capitalize;
