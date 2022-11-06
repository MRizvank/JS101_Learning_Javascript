let a={
  arr:[],
  add:function(name,phy,math,eng){
    let obj={};
    obj.name=name;
    obj.phy=phy;
    obj.math=math;
    obj.eng=eng;
    this.arr.push(obj);
    console.log(obj);
  },
  lowest:function() {
    let min=Infinity;
    let low_student;
    for(i=0;i<=this.arr.length-1;i++){
      let               
    total=this.arr[i].phy+this.arr[i].math+this.arr[i].eng;
      if(total<min){
        min=total;
        low_student=this.arr[i].name;
      }
    }
    console.log(low_student,min);
  },
  highest: function(){
    let max=-Infinity;
    let highest_student;
    for(i=0;i<=this.arr.length-1;i++){
      let total=this.arr[i].phy+this.arr[i].math+this.arr[i].eng;
      if(total>max){
        max=total;
        max_student=this.arr[i].name;
      }
    }
    console.log(max_student,max);
  }
  
};
a.add("Liju ", 23, 35, 45);
a.add("Sanket", 54, 66, 73);
a.add("Tarkshwar", 42, 55, 67);
a.add("Rizvan", 82, 45,77);
a.lowest();
a.highest();

