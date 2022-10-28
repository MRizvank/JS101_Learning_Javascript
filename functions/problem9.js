function isOdd(num){
  if(num%2==0){
    return true;
  }
  return false;
}
function Give(N){
  for (i=0;i<=N;i++){
    let ans=isOdd(i);
    if(ans==false){
      console.log(i,"is odd")
    }
  }
}
Give(35);