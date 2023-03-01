function verificarRespuestas() {
    var total = 4;
    var puntos  = 0;

    var myForm = document.forms["quizform"];
    var respuestas =["a", "b", "c", "a"];
     
    for (var i = 1; i < total; i++){
        if(myForm["p" + i].value === null  || myForm["p"+ i].value === ""){
            alert( "Nene por favor responde la pregunta" + i);
            return false;

        } else{
            if(myForm["p"+ i].value === respuestas [i - 1]){
                puntos ++;

            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h5>Obtuviste <span>' + puntos + '</span> de <span>'+ total + 'puntos </span> </5>';


    return false;
    
}