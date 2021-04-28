
// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//
//   for(x=0;x<array.length;x++){
//   const	num2=targetSum-array[x];
//   const  num1=array[x]
//
//     delete array[x]
//     console.log(array)
//   	if (array.includes(num2)){
//   		return [num1,num2];
//   	}
//
//   }
//   	return []
//
//   }
//
// // Do not edit the line below.
//
//
// console.log(twoNumberSum([3,5,-4,8,11,1,6,9],10))
//
// exports.twoNumberSum = twoNumberSum;


// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//
// 	for (let element of array){
//
// 		if (sequence[0]===element){
//       sequence.splice(0,1)
//       console.log(sequence)
//       console.log(sequence.length)
// 		  }
// 	if (sequence.length===0){
// 			return true
// 		}
// 	}
// 	return false
// }




// console.log(isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10]))







//
// function sortedSquaredArray(array) {
//   // Write your code here.
// 	squareArray=[]
// 	for (let element of array){
//     squareArray.push(element*element)
//
// 	}
//   return squareArray.sort(function(a,b){return a-b});
// }


// console.log(sortedSquaredArray([0,2,3,5,6,8,0]))


function tournamentWinner(competitions, results) {

	var compMap={};
  // Write your code here.
	for (x=0; x<results.length; x++){

		if (results[x]===0){

      compMap[competitions[x][1]]+1

	}

		if (results[x]===1){
			compMap[competitions[x][0]]+1||1 ;
		}
	}

compMap.sort(function(a, b) {
      return a[1] - b[1];})

console.log(compMap[0])


}

tournamentWinner([['me','you'],['you','me'],['them','you']],[0,0,0])
