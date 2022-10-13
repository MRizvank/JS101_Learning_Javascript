let sr="I am Iron Man";
let sum=0,count=0;
for(let i=0;i<=sr.length-1;i++){
    if(sr[i]==" "){
        count++;
        count=count*count;
        sum+=count;
    }
}
console.log(sum);