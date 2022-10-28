
function replace(string){
let str="";
for (i=0;i<string.length;i++){
  if(string[i]==" "){
    str+="-"
  }else{
    str+=string[i];
  }
}
console.log(str);
}
replace("My name is Thomas shelby")