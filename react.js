var n = 5;
var string = '';
var row = 1;
while(row <=n){
    var col = 1;
    while(col<=n){
        string +="*";
        col = col + 1;
    }
    string += "\n";
    row = row +1;
}
console.log(string)

var n = 5;
var string = '';
var row = 1;
while(row <=n){
    var col = 1;
    while(col<=n){
        string += col;
        col = col + 1;
    }
    string += "\n";
    row = row +1;
}
console.log(string)

var n = 5;
var string = '';
var row = 1;
while(row <=n){
    var col = 1;
    while(col<=n){
        string += row;
        col = col + 1;
    }
    string += "\n";
    row = row +1;
}
console.log(string)
var n = 5;
var string = '';
var row = 1;
let count = 1;
while(row <=n){
    var col = 1;
    while(col<=n){
        string += count+" ";
        count = count +1;
        col = col + 1;
    }
    string += "\n";
    row = row +1;
}
console.log(string)
var n = 5;
var string = '';
var row = 1;
while(row <=n){
    var col = 1;
    var out =row;
    while(col<=n){
        string += out+" ";
        out = out +1;
        col = col + 1;
    }
    string += "\n";
    row = row +1;
}
console.log(string)