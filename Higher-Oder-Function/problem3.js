// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7


let arr=[3,4,5,6,7];
let new_arr=[];
arr.forEach(function(element){
  if(element%2!=0){
    new_arr.push(element);
  }
  
})
console.log(new_arr.join("-"))         