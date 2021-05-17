// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//

//
// function fib(n) {
//
// let series=[0,1,1]
//   for(let i=3; i<=n;i++ ){
//     series.push((series[series.length-1]+series[series.length-2]))
//   }
//
//
// return series[n]
//
// }


// function fib(n,count=1,series=[0,1,1]){
//
//
//
// if(count==n+1) return;
//
//
// else{
// series.push((series[series.length-1]+series[series.length-2]))
//
//   fib(n,count+1,series)
// }
//
// return series[n];
// }
//
//




function slowFib(n){



if(n<2) return n;


return fib(n-1)+fib(n-2)
}
//

//memoization remembers inputs/results that were previously provided by a slow function
//and helps speeds things up by not going througn already know inputs/results


function memoize(fn){
//create cache keep record of all calls to function and their results
const cache={};
//accept multiple arguments
return function(...args){

  //check to see if argument passed to slow function is stored in cache
  if(cache[args]){
    return cache[args];
  }

  //if not in cache store it in, and return the result
  const result = fn.apply(this,args);

  cache[args]=result;

  return result;
};

}

//how to use memoize below

const fib=memoize(slowFib)



console.log(fib(50));
 module.exports = fib;
