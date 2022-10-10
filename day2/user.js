// Given stored username and password and input username and 
//password, Print if the user can login or not.
let db_username = "mrknight@123";
let db_password = "123@abc";
let user = "mrknight@123";
let pass = "123@abc";
if (db_username ==user) {
  if (db_password == pass) {
    console.log("Login Successfull");
  } else {
    console.log("incorrect password!!");
  }
}
else {
  console.log("Wrong username!!")
}