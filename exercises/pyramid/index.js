// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'



function pyramid(n) {



for(let row=1; row<=n;row++){

if(row==n ){

  console.log('#'.repeat((row-1)+row))
}
else if(row==1){
  console.log(' '.repeat(n-1)+'#'+' '.repeat(n-1))
}

else console.log(' '.repeat(Math.floor((n+2-row)/2))+'#'.repeat((row-1)+row)+' '.repeat(Math.floor((n+2-row)/2)))
}

}


pyramid(4)
module.exports = pyramid;
