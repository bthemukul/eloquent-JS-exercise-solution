//Problem -1

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));


// → [1, 2, 3, 4, 5, 6]

  *
 **
***


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main(input) {
    var n = parseInt(readLine());
    
    for(i = 0; i < n; i++){
  var output = "";
  for(j = n; j > 0; j--){
	if(i < j - 1){
	output+=" ";
	}else{
	output+="#";
	}
  }
  console.log(output);
}
}
    
   process.stdin.resume();
    process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data",function (input) {_input += input ;} );
process.stdin.on("end",function(){main(_input)});