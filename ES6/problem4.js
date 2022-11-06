let string="TeSt"

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let change=(st)=>{
  let bag="";
  for(let i=0;i<st.length;i++){
    for(let j=0; j<lower.length; j++){
      if(string[i]==lower[j]){
        bag+=upper[j]
      }else if(string[i]==upper[j]){
        bag+=lower[j]
      }
    }
  }
  console.log(bag)
}

change(string)