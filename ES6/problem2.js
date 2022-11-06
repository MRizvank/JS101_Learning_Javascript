/*Problem 2
Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average*/
let arr=[10,20,30,40];
//let arr=[];

let avg=(arr)=>{
  let sum=0;
  let count=0;
  if(arr.length!=0){
    arr.forEach(function(element){
      sum+=element;
      count++;
     
    })
    
  }else{
    count=1;
  }
  console.log(sum/count)
  
}
avg(arr);