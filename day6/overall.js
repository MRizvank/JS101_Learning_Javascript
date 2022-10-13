//Given an array of string count the overall total number of characters

let arr,count;
arr=["Harshi","Liju","Rizvan","Sulagna","Sweta"];
// arr=["abc","cde"];
count=0;
for(i=0;i<arr.length;i++){
  count+=arr[i].length;
}
console.log(count);