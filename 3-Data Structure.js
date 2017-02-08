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


function prepend(element, list){
		return {value: element, rest : list};
}

function nth(list, n)
{
		if (!list) return undefined;
		else if (n==0) return list.value;
		else
          return (nth(list.rest, n-1));
}



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//Problem - 4 
/* Deep Comparison */

function deepEqual(x,y){
	if(x===y) return true;
  
  	if ( typeof x != "object" || x== null || typeof y != "object" || y == null ) 
    return false;
  
  var keyinx=0 , keyiny = 0 ;
  
  for (key in x) keyinx+=1;
  
  for (key in y){ keyiny+=1;
               
               if( ( !key in x) || (!deepEqual(x[key], y[key])))
                 return false ;
                }
  return keyinx==keyiny ;
  
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
