let obj={
  l:"40",
  w:"20",
  perimeter:function(){
    console.log(2*(this.l+this.w));
  },
  area:function(){
    console.log(this.l*this.w);
  }
};
obj.perimeter();
obj.area();
