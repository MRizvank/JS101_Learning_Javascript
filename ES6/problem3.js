let arr=["MA", "SA", "I", "SCH", "OOL"];

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
let swap=(arr)=>{
 let ans=[];
for(let i=0; i<arr.length; i++){
    let bag="";
    for(let j=0; j<arr[i].length; j++){
     for(let k=0; k<upper.length; k++){
       if(arr[i][j]==upper[k]){
         bag+=lower[k]
       }
     }
    }
  ans.push(bag)
}
console.log(ans)
}
swap(arr)