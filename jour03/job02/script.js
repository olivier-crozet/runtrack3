
////////affectation d'un css au demarage///////
//$(document).ready(function(){ 
//	var div = document.getElementById('mesdivs').className = "renger";	
//});

//$(document).oneclick(function rando(){
	//var div = document.getElementById('melangees').className = "derenger";
	//document.getElementById("rando").innerHTML = listerando[Math.floor(Math.random() * listerando.length)];

/////////////test 2///////////////////////////
//var = divs=ordre

//})
//////////////////////////////test 3//////////////////////////////

/*$(document).oneclick(function shuffle()) {
 var m = array.length, t, i;

 //While there remain elements to shuffle…
 while (m) {

 //Pick a remaining element…
 i = Math.floor(Math.random() * m--);

 //And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }

return array;
}*/

/////////////////::::test 4//////////////////////////////

//selection du  fils de section//

////// .children(pere de l'element ici)



//function melangees(divs){
	//$('section > div')
//}
///////////image mi en tableau////////
  var divTabl=["#im1","#im2","#im3","#im4","#im5","#im6"]  ;
console.log(divTabl);

$("#button").click(function(){
	//////creation objet
var  obj = $("#mesdivs");
///////:enfent de lobjet
var imgs = obj.children();
// divs.css()

 
   ////////nombre delement dans le tableau
   x = divTabl.length ;
   // var nbrDiv = $("#rangees img").length;
    while (imgs.length)
      {
  
//var div = document.getElementById('.sect').innerHTML = match.floor(Math.random() * x );
 /////////conditionement de lenfant/////////////
 imgs.append(imgs.splice(Math.floor(Math.random() * imgs.length), 1)[0]);
	  }
console.log(img);
   });


 var tab2 = [];

$("img").click(function(){
$(this).appendTo( "#sect" );

var count = $("#sect img").length;
			   console.log(count);
			 
			    tableau.push($(this).attr('id'));
			 

});