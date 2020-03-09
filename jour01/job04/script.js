
let annee = 2020;
function bisextile(annee)
{
if (( annee %4 === 0 &&  annee %100 > 0 ) || (annee % 400 === 0)) return true;
else return false;
}

var result = bisextile(annee);
alert(result);