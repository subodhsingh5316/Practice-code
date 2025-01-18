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
    console.log(output)