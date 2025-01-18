function productSubtract(n){
    let product = 1;
    let sum = 0;
    while(n!==0){
        var digit = n%10;
        product= product * digit;
        sum = sum + digit;
        n = parseInt(n/10)
    }
    let answer = product-sum;
    return answer
}
console.log(productSubtract(12345))