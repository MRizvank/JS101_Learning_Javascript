let N=6;
for (let i=1;i<=N;i++){
  let bag="";

  for (let star=1;star<=N;star++){
    if(i==1 || i==N){
      bag+="*";
    } else {
      if(star==1 || star==N){
        bag+="*";
      } else {
        bag+=" ";
      }
    }
  }
  
  console.log(bag);
}
