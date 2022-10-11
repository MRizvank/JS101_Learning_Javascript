//Print the average of even numbers from 1 to 100 (both included)

let x,count,average,sum;
x=1;
count=0;
sum=0;
while(x<=100){
  if(x%2==0){
    sum+=x;
    count++;
  }
  x++;
}
console.log("The average is ",sum/count);