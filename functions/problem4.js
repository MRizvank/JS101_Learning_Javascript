function check(character){
  let lower="abcdefghijklmnopqrstuvwxyz";
  let present=false;
  for (let i=0;i<=lower.length-1;i++){
    if(character==lower[i]){
      present = true;
      break;
    }
  }

  return present;
}

let ans=check("H");

if(ans==true){
  console.log("It is there");
} else {
  console.log("Not Present");
}