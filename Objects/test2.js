let arr=[5,4,6,5,8,10];
for(i=1;i<arr.length-1;i++){
  if(arr[i-1]>arr[i] &&arr[i+1] >arr[i]){
    console.log(arr[i]);
  }
}