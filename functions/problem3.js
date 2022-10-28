function checkPrime(num){
    let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        // console.log("Prime no")
        return true;
    }else{
        // console.log("not prime")
        return false
    }
    }
    for (j=2;j<=35;j++){
        let ans=checkPrime(j);
        if(ans==false){
            console.log(j,"Not Prime");
        }
    }