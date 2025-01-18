function primeFactor(n){
    if(n<=1) return
 for(let i=2;i*i<=n;i++){
   while(n%i===0){
     console.log(i)
     n=Math.floor(n/i)
   }
   
 }
 if(n>1){
    console.log(n)
   }
}
primeFactor(450)
console.log("question:- efficent")

function primeFactorEfic(n){
    if(n<=1)return;
    while(n%2===0){
        console.log(2+"")
        n=Math.floor(n/2)
    }
    while(n%3===0){
        console.log(3+"")
        n=Math.floor(n/3)
    }
    for(let i=5;i*i<=n;i=i+6){
        while(n%i==0){
            console.log(i+"");
            n=Math.floor(n/i);
        }
        while(n%(i+2)==0){
            console.log((i+2) +"");
            n=Math.floor(n/i+2);
        }
    }
    if(n>3){
        console.log(n)
    }
}
primeFactorEfic(450)