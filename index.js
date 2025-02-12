function addTwoNumbers(firstNumber, secondNumber){
 let answer = firstNumber + secondNumber;
 return answer;
}
function multiply(numberOne, numberTwo){
	let result = numberOne * numberTwo;
	return result;
}
const getOddNumbers = (arr) =>{
 let newArray = [];
 let count = 0;
 for(index in arr){
   console.log(index)
   if(arr[index] % 2 != 0){
   
     newArray[count++] = arr[index]
  }
 }
console.log(newArray)
 //return newArray;
}

module.exports = {addTwoNumbers, multiply, getOddNumbers};