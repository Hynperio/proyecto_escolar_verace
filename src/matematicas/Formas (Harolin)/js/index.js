const handleClick = (event) => {

  let eso1 = event.target;
  let letra1 = eso1.parentElement;
  letra1.classList.toggle("eso1");
  document.querySelector(".cu1").style.display = "block";
  document.querySelector(".cu2").style.display = "none";
  document.querySelector(".cu").style.display = "none";
  document.querySelector(".le").style.display = "none";
  document.querySelector(".ro").style.display = "none";
  document.querySelector(".pa").style.display = "none";

};

  document.querySelectorAll(".toggle1").forEach((cuadrado) => {
  cuadrado.addEventListener("click", handleClick);

});


const handleClick2 = (event) => {
  let eso2 = event.target;
  let letra2 = eso2.parentElement;
  letra2.classList.toggle("eso2");
  document.querySelector(".cu1").style.display = "none";
  document.querySelector(".cu2").style.display = "block";
  document.querySelector(".cu").style.display = "none";
  document.querySelector(".le").style.display = "none";
  document.querySelector(".ro").style.display = "none";
  document.querySelector(".pa").style.display = "none";

};

document.querySelectorAll(".toggle2").forEach((circulo) => {
  circulo.addEventListener("click", handleClick2);
  
});


const handleClick3 = (event) => {

  const eso3 = event.target;
  const letra3 = eso3.parentElement;
  letra3.classList.toggle("eso3");
  document.querySelector(".cu1").style.display = "none";
  document.querySelector(".cu2").style.display = "none";
  document.querySelector(".cu").style.display = "block";
  document.querySelector(".le").style.display = "none";
  document.querySelector(".ro").style.display = "none";
  document.querySelector(".pa").style.display = "none";
};

document.querySelectorAll(".toggle3").forEach((rectangulo) => {
  rectangulo.addEventListener("click", handleClick3);
  
});

const handleClick4 = (event) => {

  const eso4 = event.target;
  const letra4 = eso4.parentElement;
  letra4.classList.toggle("eso4");
  document.querySelector(".cu1").style.display = "none";
  document.querySelector(".cu2").style.display = "none";
  document.querySelector(".cu").style.display = "none";
  document.querySelector(".le").style.display = "block";
  document.querySelector(".ro").style.display = "none";
  document.querySelector(".pa").style.display = "none";
};

document.querySelectorAll(".toggle4").forEach((triangulo) => {
  triangulo.addEventListener("click", handleClick4);
  
});

const handleClick5 = (event) => {

  const eso5 = event.target;
  const letra5 = eso5.parentElement;
  letra5.classList.toggle("eso5");
  document.querySelector(".cu1").style.display = "none";
  document.querySelector(".cu2").style.display = "none";
  document.querySelector(".cu").style.display = "none";
  document.querySelector(".le").style.display = "none";
  document.querySelector(".ro").style.display = "block";
  document.querySelector(".pa").style.display = "none";
};

document.querySelectorAll(".toggle5").forEach((rombo) => {
  rombo.addEventListener("click", handleClick5);
  
});

const handleClick6 = (event) => {

  const eso6 = event.target;
  const letra6 = eso6.parentElement;
  letra6.classList.toggle("eso6");
  document.querySelector(".cu1").style.display = "none";
  document.querySelector(".cu2").style.display = "none";
  document.querySelector(".cu").style.display = "none";
  document.querySelector(".le").style.display = "none";
  document.querySelector(".ro").style.display = "none";
  document.querySelector(".pa").style.display = "block";
};

document.querySelectorAll(".toggle6").forEach((paralelogramo) => {
  paralelogramo.addEventListener("click", handleClick6);
  
});





const handleClick11 = (event) => {

  let eso11 = event.target;
  let letra11 = eso11.parentElement;
  letra11.classList.toggle("eso11");
  document.querySelector(".cu11").style.display = "block";
  document.querySelector(".cu22").style.display = "none";
  document.querySelector(".cu3").style.display = "none";
  document.querySelector(".le2").style.display = "none";
  document.querySelector(".ro5").style.display = "none";
  document.querySelector(".pa22").style.display = "none";

};

  document.querySelectorAll(".toggle11").forEach((cuadrado) => {
  cuadrado.addEventListener("click", handleClick11);

});

const handleClick22 = (event) => {

  let eso22 = event.target;
  let letra22 = eso22.parentElement;
  letra22.classList.toggle("eso22");
  document.querySelector(".cu11").style.display = "none";
  document.querySelector(".cu22").style.display = "block";
  document.querySelector(".cu3").style.display = "none";
  document.querySelector(".le2").style.display = "none";
  document.querySelector(".ro5").style.display = "none";
  document.querySelector(".pa22").style.display = "none";

};

  document.querySelectorAll(".toggle22").forEach((circulo) => {
  circulo.addEventListener("click", handleClick22);

});

const handleClick33 = (event) => {

  let eso33 = event.target;
  let letra33 = eso33.parentElement;
  letra33.classList.toggle("eso33");
  document.querySelector(".cu11").style.display = "none";
  document.querySelector(".cu22").style.display = "none";
  document.querySelector(".cu3").style.display = "block";
  document.querySelector(".le2").style.display = "none";
  document.querySelector(".ro5").style.display = "none";
  document.querySelector(".pa22").style.display = "none";

};

  document.querySelectorAll(".toggle33").forEach((rectangulo) => {
  rectangulo.addEventListener("click", handleClick33);

});

const handleClick44 = (event) => {

  let eso44 = event.target;
  let letra44 = eso44.parentElement;
  letra44.classList.toggle("eso44");
  document.querySelector(".cu11").style.display = "none";
  document.querySelector(".cu22").style.display = "none";
  document.querySelector(".cu3").style.display = "none";
  document.querySelector(".le2").style.display = "block";
  document.querySelector(".ro5").style.display = "none";
  document.querySelector(".pa22").style.display = "none";

};

  document.querySelectorAll(".toggle44").forEach((triangulo) => {
  triangulo.addEventListener("click", handleClick44);

});

const handleClick55 = (event) => {

  let eso55 = event.target;
  let letra55 = eso55.parentElement;
  letra55.classList.toggle("eso55");
  document.querySelector(".cu11").style.display = "none";
  document.querySelector(".cu22").style.display = "none";
  document.querySelector(".cu3").style.display = "none";
  document.querySelector(".le2").style.display = "none";
  document.querySelector(".ro5").style.display = "block";
  document.querySelector(".pa22").style.display = "none";

};

  document.querySelectorAll(".toggle55").forEach((rombo) => {
  rombo.addEventListener("click", handleClick55);

});

const handleClick66 = (event) => {

  let eso66 = event.target;
  let letra66 = eso66.parentElement;
  letra66.classList.toggle("eso66");
  document.querySelector(".cu11").style.display = "none";
  document.querySelector(".cu22").style.display = "none";
  document.querySelector(".cu3").style.display = "none";
  document.querySelector(".le2").style.display = "none";
  document.querySelector(".ro5").style.display = "none";
  document.querySelector(".pa22").style.display = "block";

};

  document.querySelectorAll(".toggle66").forEach((paralelogramo) => {
  paralelogramo.addEventListener("click", handleClick66);

});