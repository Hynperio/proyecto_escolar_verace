swal("Hola soy BOB!", "Hoy te enseñaré los números de 1 al 10 en inglés!")
.then((value) => {
  swal(`Recuerda darme click para escuchar el número! ${value}`);
});
 
 
 
 var numeros = ["", "1", "2","", "3","", "4","", "5","", "6","", "7","", "8","", "9","", "10","10","10"];
  var numerosEnLetras = ["", "One","", "Two","", "Three","", "Four","", "Five","", "Six","", "Seven","", "Eight","", "Nine","", "Ten"];
  var sonidos = ["", "audio/One.m4a","", "audio/Two.m4a","", "audio/Three.m4a","", "audio/Four.m4a","", "audio/Five.m4a","", "audio/Six.m4a","", "audio/Seven.m4a","", "audio/Eight.m4a","", "audio/Nine.m4a","", "audio/Ten.m4a"];
  var numeroActual = 1;
  var divNumero = document.getElementById("numero");
var divNumeross = document.getElementById("numeross");

  function siguienteNumero() {
    if (numeroActual <= 19) {
      numeroActual++;
      divNumero.innerHTML = numeros[numeroActual];
      

    }

    else if( numeroActual >= 10){
      location.reload();
}
  }


  function reproducirSonido() {
    var audio = new Audio(sonidos[numeroActual]);
    audio.play();
  }

  function sonidoAnterior() {
    if (numeroActual >= 0) {
      numeroActual--;
      divNumero.innerHTML = numeros + [numeroActual];
    }
  }
  

  function siguienteNumeros() {
    if (numeroActual <= 19) {
      numeroActual++;
      divNumeross.innerHTML = numerosEnLetras[numeroActual];
    }
    else if( numeroActual >= 10){
          location.reload();
    }
  }
  
    function sonidoAnteriorr() {
    if (numeroActual >= 0) {
      numeroActual--;
      divNumeross.innerHTML = numerosEnLetras[numeroActual];
    }
  }


  