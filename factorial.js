 function fact(n){
    let res=1;
    for(let i=2;i<=n;i++)
    res = res*i;
    return res

 }
 console.log(fact(5))
 function fact(n){
     if(n===0){
        return 1
     }
    return n*fact(n-1)
 }