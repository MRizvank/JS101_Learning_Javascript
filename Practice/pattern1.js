// for(let i=0;i<5;i++){
  // ba="";
  // for(let j=0;j<5;j++){
  //   if(j==0||j==4){
  //     ba+="*";
  //   }else{
  //     ba+=" ";
  //   }console.log(ba);
  // }
// }
let N=10;
for(let j=0;j<=N;j++){
  let bag="";
  for(let i=0;i<=N;i++){
    if(j==0||j==N){
       bag+="*";
    }else{
      if(i==0||i==N){
        bag+="*"
      }else{
      bag+=" ";
    }
   
  }

}console.log(bag);
}