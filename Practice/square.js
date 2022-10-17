  // function sumsquare(n){
let n=13 ;
let b=[];
let co=0;
  for (i = 1; i * i <= n; i++){
       for (j = 1; j * j <= n; j++){
         if (i * i + j * j == n){
            //console.log(i,j);
           b.push(i,j);
           co++;
         }
    }
  }
//console.log(b);
console.log(co>0);

 // var n = 25;
 //  if(sumSquare(n)){
 //      console.log("Yes");
 //  }else{
 //    console.log("No");
 //  }