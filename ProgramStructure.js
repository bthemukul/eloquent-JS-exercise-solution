// 1 Program Structure

/* Answer to the 1st Question */

var x='*';
for(var n=0; n<7; n++) {
console.log(x);
x=x+'*';
document.write("\n");
}
console.log("\n");


/* Answer to the 2nd Question */

for(var n=1; n<=100; n++)
{
	var m=n%3;
	var p=n%5;

		if(m==0 && p==0) {console.log("FizzBuzz");}

		if(m==0 && p!=0) {console.log("Fizz");}

		if(m!=0 && p==0) {console.log("Buzz");}

		if(m!=0 && p!=0) {console.log(n);}

	document.write("\n");

}



/* Answer to the 3nd Question */

var size=8;
for(var n=1;n<=size;)
{	
		var x=" *";
		var h = size/2;
														for(var p=1; p<=h; p++)
														{
															console.log(" *");
																x= x + " *" ;
														}
				var x="* ";
														for(var p=1; p<=h; p++)
														{
															console.log("* ");
																x= x + "* " ;
														}
		n++;
}

if (n==size){break;}
