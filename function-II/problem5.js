// Problem 5
//Write a custom function that has the same behavior of inbuilt Array Includes Function
//input array1 = [1, 2, 3];

//output: true


function include(arr,arg){
   for(let i = 0; i < arr.length; i++){
      if(arr[i] === arg){
         return true;
      }
   }
   return false;
}
//const arr = [1, 2, 3,];
let arr=["dad","cat","food","water"]
console.log(include(arr,"water"));