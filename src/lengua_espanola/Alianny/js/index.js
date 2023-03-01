
let vocales = prompt("Escribe las 5 vocales");
let respuesta= " ";

if (vocales == 'aeiou'|| vocales == 'AEIOU')

{ 
respuesta = respuesta +  "a " + "e " + "i " +  "o " + "u " + "<br> " + "A " + "E " + "I " +  "O " + "U" +  "<br> " +  "<br> ";

function alerta(){
swal({
title: "Muy bien!",
icon: "success",
});
}
setTimeout(alerta, 2000);

}

else 
{alert( 'Esas no son las 5 vocales, el burro sabe mas que tu' );}

document.getElementById("texto").innerHTML = "<br>" + "<br>" + "<br>"+ "Las 5 vocales: " + "<br>" + respuesta + "<br>" + "<br>" ;



 
