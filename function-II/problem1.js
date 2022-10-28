//  Write a custom function that has the same behavior of inbuilt Array Join Function 

//input = ['Tree', 'Food', 'Car'];
//output="Tree Food Car"

function arrJoin(a,diff) {
  let sum = "";
  for (let i = 0; i < a.length; i++) {
    if(i==a.length-1){
      sum += a[i]
    }else{
    sum += a[i] + diff;
  }
  
}console.log(sum);
}
arrJoin(['Tree', 'Food', 'Car'],"-");

