
let nombres = 0 ;
function fizzbuzz(){


	while( nombres <= 151 )
	{
		if (nombres %3 == 0 ) 
		{
			console.log("Fizz");
		}
		if ( nombres %5 == 0 ) 
		{
			console.log("Buzz");
		}
		if (nombres %3 == 0 && nombres %5 == 0 ) 
		{
			console.log("FizzBuzz");
		 }
		 else
		 {
		 	console.log(nombres);
		 }
		 nombres++;
	}
}

let result = fizzbuzz();