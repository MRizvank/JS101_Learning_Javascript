let days;
for (let month=1;month<=12;month++){
  if(month==2){
    days=28;
  } else if(month==4||month==6||month==9||month==11){
    days=30;
  } else {
    days=31;
  }
  for (let d=1;d<=days;d++){
    console.log(d+"-"+month);
  }
}