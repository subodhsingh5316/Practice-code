function palin(n){
    var rev = 0;

	var temp = Math.ceil(n);
	while(temp > 0)
	{
		var ld = temp % 10;
		rev = rev * 10 + ld;
		temp = parseInt(temp / 10);
	}	
	return rev==n;
}
console.log(palin(12341))
var a = 123;
var b, sum = 0;
var z = a;
while(a > 0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
console.log(sum);