

	
	let jour = [
	new Date('2020/01/01'),
	new Date('2020/04/13'),
	new Date('2020/05/08')
	];



	let data = new Date('2020/01/01 00:00:00.0');
	
	function jourtravaille(date)
	{

		for (var i = 0; i <= 2; i++)
		{
			
		let	timstamp = jour[i].getTime();
		let	timestampdate = data.getTime();
	
		
		     if ( timestampdate == timstamp  )
		     {
		     	console.log( jour + ' ' + "est un jour ferier" );
		     }
		    

		}     
	}
let result = jourtravaille();
