
//SAMPLE INPUT :
obj={
 sales :[
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 },
  
 ],
 calculateSalesTotals:function(){
  let arr=[];
  for(i=0;i<=this.sales.length-1;i++){
    let per=0;
    let b=this.sales[i];
    if(b.discount!==undefined){
      per=b.discount*b.original;
      b.sale=b.original-per;
      b.total=b.sale*b.stock;
      arr[i]=b;
    }else{
      b.sale=b.original;
      b.total=b.sale*b.stock;
      arr[i]=b;
    }
  }
  return arr;
  }
}
let ans=obj.calculateSalesTotals();
console.log(ans);