//Given a string count the number of words in that string
let word='Back in 2000 there was a king named Bahubali';
let N=word.length;
let count=0;
for(i=0;i<N;i++){
  if(word[i]==" "){
    count++;
  }
}
console.log(count+1);