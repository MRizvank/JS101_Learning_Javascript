// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


function checkChar(letter){
  let small_case="qwertyuiopasdfghjklzxcvbnm";
  let upper_case="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(i=0;i<upper_case.length; i++){
    if(letter==upper_case[i]){
    return small_case[i];
    }
  }
  return letter;
}

function lowerWord(word){
var bag="";
for(j=0; j<word.length; j++){
bag+=checkChar(word[j]);
}
  return bag;
}
// var x="MASAI SCHOOL";
//  console.log(lowerWord(x));

function lowerArray(array){

var Arr=[];
for(k=0; k<array.length; k++){
   Arr.push(lowerWord(array[k]));
}
 return Arr;
}

var y=["MA", "SA", "I", "SCH", "OOL"];
console.log(lowerArray(y));