function mySplit(str){
  let arr=[];
  let word="";
  for (let i=0;i<=str.length-1;i++){
    if(str[i]!=" "){
      word+=str[i];
    } else {
      arr.push(word);
      word="";
    }
  }

  console.log(arr);
}

mySplit("My name is Bruce Wayne");