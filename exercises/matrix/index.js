// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


/**For this I started by initializing an empty multidimetional array based off of (n),
and setting variables to show which direction we should go next based off of the counter variable we set. Likewise we know which variable to input into array based off of
the current "space" variable(n*n).  Starting off, until we reach the max of space variable we should always go right (n) number of times, inputing and
incrementing the space variable along the way and afterwards setting the current direction to down,left,then up, and right again.
once we move in two directions any which way we decrement the counter. for example(down, then left) are two directions for which we decrement counter
After spaces loop breaks,  for odd numbers return (n)*(n) at the current position of the array.



*/



function matrix(n) {

let space=1;
let arr=[];
let up,down,left=false;
let right=true;
let counter=n;
let currCol=0;
let currRow=0;




for(let i=0;i<n;i++){

arr.push([])
  

}

//while there are still spaces left
while(space<n*n){

if(right){
for(i=0;i<=counter-1;i++){arr[currRow][currCol]=space; space++; currCol++;}
counter--;
currRow++;
right=false;
down=true;

}

if(down){
  for(i=0;i<counter;i++){arr[currRow][currCol-1]=space; space++; currRow++;}
  currCol--;
  down=false;
  left=true;

}
if(left){
  for(i=0;i<counter;i++){arr[currRow-1][currCol-1]=space; space++; currCol--;}
  currRow--;
  counter--;
  left=false;
  up=true;


}
if(up){
  for(i=0;i<counter;i++){arr[currRow-1][currCol]=space; space++; currRow--;}
  currCol++;
  up=false;
 right=true;

}


}
if((n*n)%2==1){
arr[currRow][currCol]=n*n
}


return arr
}




console.log(matrix(3));
module.exports = matrix;
