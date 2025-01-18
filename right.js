let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing star
  for (let k = 1; k <= n-i+1 ; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);