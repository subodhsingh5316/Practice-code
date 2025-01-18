// function gcd(a,b){
//    while(a  != b){
//     if(a > b){
//        a= a-b
//     }else{
//        b= b-a
//     }
//    }
//    return a
// }
function gcd(a,b){
  if (b===0){
    return a
}else{
    return gcd(b,a%b)
}
 }

console.log(gcd(12,15))