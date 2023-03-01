function main(){
    let translateBtn = document.querySelector(".button");
    let a_traducir_textarea = document.querySelector("#a_traducir");

    translateBtn.addEventListener("click",() => {
        const texto = a_traducir_textarea.value;

        if (texto == ""){
            console.log("Incluye espacios");
        }

        else{
            traduccion();
        }

})
}

function copiar(type){
    var a_copiar = document.getElementById("a_traducir");
    var to_copiar = document.getElementById("traducido");

    if (type == 0){
        navigator.clipboard.writeText(a_copiar.value);
    }

    else{
        navigator.clipboard.writeText(to_copiar.value);
    }

}

function escuchar(type){
    var a_decir = document.getElementById("a_traducir");
    var to_decir = document.getElementById("traducido");
    var a_lenguaje = document.getElementById("a_traducir_select");
    var to_lenguaje = document.getElementById("to_traducir_select");

    let utterance;

    if (type == 0){
        utterance = new SpeechSynthesisUtterance(a_decir.value);
        utterance.lang = a_lenguaje.value;
    }

    else{
        utterance = new SpeechSynthesisUtterance(to_decir.value);
        utterance.lang = to_lenguaje.value;
    }

    speechSynthesis.speak(utterance);
    
}

function cambiar_lenguaje(){
    var a_select = document.getElementById("a_traducir_select");
    var temp = a_select.value;
    var to_select =  document.getElementById("to_traducir_select");
    var a_textarea = document.getElementById("a_traducir");
    var to_textarea = document.getElementById("traducido");


    a_select.value = to_select.value;
    to_select.value = temp;

    temp = to_textarea.value;

    to_textarea.value = a_textarea.value;
    a_textarea.value = temp;
}

function a(){
  var sourceText = document.getElementById("a_traducir").value;
  var to_textarea = document.getElementById("traducido");
  var a_select = document.getElementById("a_traducir_select");
  var to_select = document.getElementById("to_traducir_select");
  var sourceLang = "";
  var targetLang = "";
  
    //Combobox Seleccion Asignacion
    switch(a_select.value){

    case "espanol":
        sourceLang = "es";
        break;

    case "frances":
        sourceLang = "fr";
        break;

    default:
        sourceLang = "en";
        break;

    }

    //Combobox 2 Seleccion Asignacion
    switch(to_select.value){

        case "espanol":
            targetLang = "es";
            break;

        case "frances":
            targetLang = "fr";
            break;

        default:
            targetLang = "en";
            break;


    }
  
    // Crear una instancia del objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Definir la URL del endpoint JSON que se quiere acceder
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);;

    // Abrir una conexión a la URL utilizando el método HTTP GET
    xhr.open("GET", url);

    // Definir una función que se ejecutará cuando se reciban los datos
    xhr.onload = function() {
    if (xhr.status === 200) {
        // Si la respuesta del servidor es exitosa, procesar los datos recibidos
        var data = JSON.parse(xhr.responseText);
        to_textarea.value = data[0][0][0];
        // Aquí se podría hacer algo con la variable to_textarea, como mostrarla en una textarea
    } else {
        // Si la respuesta del servidor no es exitosa, mostrar un mensaje de error
        console.log("Error al acceder al endpoint");
    }
    };

    // Enviar la solicitud al servidor
    xhr.send();
}

main();
