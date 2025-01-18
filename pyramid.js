var n =5;
var row = 1;
var output = "";
    while(row<=n){
        var space = n-row;
        while(space){
            output += " ";
            space = space-1;
        }
        var col = 1;
        while(col<=row){
            output +=col;
            col= col+1;
        }
        var start = row-1;
        var j = 1;
        while(start){
            var ch = String.fromCharCode(65 + row-start-1);
            output += ch;
            start = start-1;
        }
        var space = n-row;
        output +="\n";
        // console.log(output)
        row =row+1;
    }
    var row1=1;
    while(row1<n){
      var space1 = 1;
      while(space1<=row1){
        output+=" "
        space1=space1+1
      }
      var col1=1;
      while(col1< n-row1+1){
        output+=col1
        col1=col1+1
      }
      var start1 = n-row1-1;
        var j = 1;
        while(start1){
            var ch1 = String.fromCharCode(65 + n- row1-start1-1);
            output += ch1;
            start1 = start1-1;
        }
      output +="\n"
      row1 = row1+1;
    }
    // for (let i = 1; i <= n; i++) {
        // creating spaces
        // for (let j = 1; j < i; j++) {
        //   output += " ";
        // }
        // creating alphabets
        // for (let k = 0; k < 2 * (n - i + 1) - 1; k++) {
      //     output += String.fromCharCode(k + 65);
      //   }
      //   output += "\n";
      // }
    // while(row>=)
    console.log(output)