function swap_case(input){
  let output="";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  let  lower="qwertyuiopasdfghjklzxcvbnm";
    for(i=0; i<input.length; i++){
      for(j=0; j<upper.length; j++){
        if(input[i]==upper[j]){
          output+=lower[j];
        }
        else if(input[i]==lower[j]){
          output+=upper[j];
        }
      }    
    }
    return output;
}
let ans=swap_case("Test");
console.log(ans);