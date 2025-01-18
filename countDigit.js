let n = 1123;
// let n = n
// console.log(integers)
let numDigits = 0;
while(n>0){
   n = (n - n % 10)/10
   console.log(n)
    numDigits++;
}
console.log("ram")
console.log(numDigits)