// *                   * 
// * *               * * 
// * * *           * * * 
// * * * *       * * * * 
// * * * * *   * * * * * 
// * * * * *   * * * * * 
// * * * *       * * * * 
// * * *           * * * 
// * *               * * 
// *                   * 

let n = 5;
for (i = 1; i <= n; i++) {
  bag = "";
  for (j = 1; j <= i; j++) {
    bag += "*" + " ";
  }
  //console.log(bag)
  bag1="";
  let s = 2 * (n - i);
  for (j = 1; j <= s; j++) {
    bag1 += " " + " ";
  }
  //console.log(bag,bag1)
  bag3="";
  for (j = 1; j <= i; j++) {
    bag3 += "*" +" ";
  }
  console.log(bag,bag1,bag3)
}
for (i = n; i >= 1; i--) {
  bag = "";
  for (j = 1; j <= i; j++) {
    bag += "*" + " ";
  }
  //console.log(bag)
  bag1="";
  let s = 2 * (n - i);
  for (j = 1; j <=s; j++) {
    bag1 += " " + " ";
  }
  //console.log(bag,bag1)
  bag3="";
  for (j = 1; j <= i; j++) {
    bag3 += "*" +" ";
  }
  console.log(bag,bag1,bag3)
}