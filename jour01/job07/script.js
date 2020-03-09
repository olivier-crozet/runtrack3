

	
	let jour = [
	new Date('2020/01/01'),
	new Date('2020/04/13'),
	new Date('2020/05/08')
	];

	let date = new Date('2020/01/01 00:00:00.0');
	
	function jourtravaille(date)
	{

		for (var i = 0; i <= 2; i++)
		{
			
		let	timstamp = jour[i].getTime();
	//	let selectiondesjour = jour[i] ;
		//let Timestamp =  selectiondesjour.getTime()
		let	timestampdate = date.getTime();
	
		//let	timstamp = Timestamp(jour.getTime());
		
		     if ( timestampdate == timstamp  )
		     {
		     	console.log( "jour ferier" + ' ' + jour );
		     }
		}     
	}
//let result = (Date);
//console.log( Date);

let result = jourtravaille(date);
