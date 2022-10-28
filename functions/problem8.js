//let arr=[10,15,2,3,4,9];
//let arr=[];
function sumofArray(arr){
  n=arr.length;
  let sum=0;
  for(i=0;i<n;i++){
    sum+=arr[i];
  }
  return sum;
}

if(arr.length==0){
  console.log(0);
}else{
  console.log(sumofArray(arr)/arr.length);
}