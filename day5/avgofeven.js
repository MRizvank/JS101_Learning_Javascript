 //Given an array of numbers find the average of all the even numbers.
let sum=0,count=0;
let arr=[1,3,5,7,8,9,12,13,14];
for(i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum+=arr[i];
    count++;
    
  }
}
console.log(sum/count);