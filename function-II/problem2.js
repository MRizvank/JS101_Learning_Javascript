let animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', "panda","Dodo"]
function lastIndex(animals, search){
  let index=3
  for(let i=0;i<animals.length; i++){
    if (animals[i]==search)    {
      index =i   
    }
  }
  return index
}  
console.log(lastIndex(animals, "Dodo"))