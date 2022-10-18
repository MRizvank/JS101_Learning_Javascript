let friends = [ "Liju","Sweta","Tarkeshwar","Sanket","Sulagna","Liju","Rizvan","Harshita","Sanket",];

let new_list = {};
for(let i=0; i<=friends.length-1; i++){
  let key = friends[i];
  new_list[key] = 1;
  
}
console.log(new_list);
