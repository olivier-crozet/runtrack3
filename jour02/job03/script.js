
///////////////ciblé le bouton/////////////////////



///////////recuperation du contenu/////////////////////
var compteur = document.getElementById('compteur');
 
 
//////////compteur///////////////
var i = 0;


///////////////fonction adition plus 1/////////////
function addone()
{
/////////addition plus 1////////////////
  i++;
///////////////////enregistrement +1 dans le compteur text/////////
compteur.innerHTML = i ;

}
////////////////aplication de la fonction ciblé bouton////////////////
 document.getElementById('button').onclick = addone ;




