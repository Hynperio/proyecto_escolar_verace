/*
function fuc(){
    numeross = document.getElementById("numeros").value
  swal({
    title: "Good job!",
    text: numeross,
    icon: "success",
    timer: 1000,
    button: false
  });

}

document.getElementById('numeros').addEventListener('input',fuc)

*/
/*
 let productos = ["arroz", "carne", "jugo"]

 /*
productos.push("hola")
console.log(productos.length)
console.log (productos)
    alert(productos[0])
  */
/*
  productos.forEach(element => {
    console.log(productos)
  });

    /*

let boton = document.getElementsByClassName("boton2");
    boton.addEventListener('dblclick', myf2);



    function myf2() {
      document.getElementsByClassName("boton");

    }


let a = prompt("tabla")

var uno=a;
for (let a= 0; a<=10; a++){
  var texto = document.getElementById("texto");
  texto.innerHTML += "<center>" + uno + "*" + a + "=" + uno*(a) + "<br>";
}
   */

function squareRoot(numbero) {
  return Math.sqrt(numbero);
}

let numbero = parseInt(prompt("Ingrese un número: "));
let resultado = squareRoot(numbero);
document.getElementById("t1").innerHTML =(`La raíz cuadrada de ${numbero} es <br>  ${resultado}`)   ;

