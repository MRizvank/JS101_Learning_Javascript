let n=5;
var bag="";
for(j=n;j>=1;j--){
  bag+="*"+" ";
}console.log(bag);
// strt ='Masteringjs.ioF';
for(i=0;i<=4;i++){
  bag=bag.slice(0, -1);
  console.log(bag);
}