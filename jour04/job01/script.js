













$(function(){
$("#button").click(function(){
     
    $.ajax({
       url : 'expression.txt', // La ressource ciblée
       method:"POST",
       dataType : 'text',

 // La fonction à appeler si la requête n'a pas abouti
 success: function (enculer) {
            // Je charge les données dans box
            $('#cassecouille').text(enculer);
          //  box.html(requette);
            //let newP = document.createElement('p');
              //  console.log("zfjshkjsjk");
           // newP.textContent = 'Paragraphe créé et inséré grâce au JavaScript';
            
        }
    
 

 
 
    })
   })
});

 // La fonction à appeler si la requête a abouti

      
        
 