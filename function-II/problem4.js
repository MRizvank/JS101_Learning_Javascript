function myFunction(num1, num2) {
  var str = "Mozilla";
  var subString = "";
  var len = str.length;

  if (num1 < 0 || num2 > len) {
    console.log("Invalid input");
  } else {
    var k = 0;
    for (i = num1; i < num2; i++) {
      subString = subString + str[i];
      k++;
    }
    console.log(subString);
  }
}
myFunction(0, 1);