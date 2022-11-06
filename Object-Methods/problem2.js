// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]
//  Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
//  The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// Sample output for the above case `290`


let obj={
  data:[
    {
    name:"Rice",
    Quantity:2,
    price:60
    },
    {
    name:"Dhal",
    Quantity:3,
    price:50
    },
    {
    name:"Salt",
    Quantity:1,
    price:20
    }
  ],
  total:function(){
    let total=0;
    for(i=0;i<this.data.length;i++){
      total+=this.data[i].Quantity * this.data[i].price;
      
    }
   console.log(total);
  }
  
}
obj.total();