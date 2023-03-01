var num1, num2, respuesta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";

	//formula que genera los numeros aleatorios entre 0,el 1 y el 9
	num1 = Math.round(Math.random()*9);
	num2 = Math.round(Math.random()*9);
	respuesta = num1 + num2;
	//aqui se asignan los numeros para que se muestren
	suma.innerHTML = num1 + " + " + num2 + " = ";

	//esta genera un número entre el 0 y el 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//esta sirve si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
}
//esta funcion es para controlar las respuestas
function controlarRespuesta(opcionElegida){	

	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "Muy bien!";
		txt_msj.style.color="green";
		setTimeout(comenzar, 1000);
	}else{
		txt_msj.innerHTML = "Intenta denuevo!";
		txt_msj.style.color="red";
		setTimeout(limpiar, 1000);

	}
//esta funcion sirve para limpiar
}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

comenzar();











