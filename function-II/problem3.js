
function myFunction(arr,start, end) {
 
  let subArry = [];
  let  len = arr.length;

  if (start < 0 || end > len) {
    console.log("Invalid input");
  } else {
    var k = 0;
    for (i = start; i < end; i++) {
      subArry.push(arr[i]);
      k++;
    }
    return subArry;
  }
}
let a=[1,5,6,8,9,4,5,6];
console.log(myFunction(a,2,5));