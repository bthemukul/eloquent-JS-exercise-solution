// Problem - 1 (The Sum of a Range)

function range(start, end, step) {
 if (step == null ) step =1;
		var series = [];

 if(step >0 ) {
		for(var i=start; i<=end; i+=step){
			 series.push(i);
							}
}

else  {
			for(var i=start; i>=end; i+=step){
			 series.push(i);
							}
}

return series ; 
}

function sum(series){
		var s=0;
  		 for(var i=0; i<series.length ; i++)
         {
			s= s + series[i];
			}
  return s;
}




console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55



// Problem - 2 (Reverse an Array)

function reverseArray(array)
{
	var rarray = [];
   var x= array.length - 1 ;
  		for(var i=0; i<array.length; i++)
        {
			rarray[i] = array[x];
          			x--;
		}
return rarray;
}

function reverseArrayInPlace(arrayValue)
{
			var rarray = [];
   var x= arrayValue.length - 1 ;
  		for(var i=0; i<arrayValue.length; i++)
        {
			rarray[i] = arrayValue[x];
          			x--;
		}
	arrayValue = rarray;
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Problem - 3 
// A List

function arrayToList(array){
  var list = null;
	for(var i=array.length-1; i>=0 ;i--)
		list = {value: array[i], rest: list};
	return list;
}

function listToArray(list){
		var array = [];
		for(var i=list; i; i=i.rest)
        {array.push(i.value);}

return array;
  
}
