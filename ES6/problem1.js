/*
Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)
*/


checkOdd=(num)=>{
        if(num%2!==0){
          return true
        }else{
          return false
       
        }
}
for (j=0;j<=35;j++){
  let ans=checkOdd(j);
        if(ans==true){
            console.log(j," Is Odd number");
        }
}
