const paraguay = document.getElementById("paraguay");
const brasil = document.getElementById("brasil");
const elsalvador = document.getElementById("elsalvador") ;
const mexico = document.getElementById("mexico");
const bolivia = document.getElementById("bolivia");
const argentina = document.getElementById("argentina");
const cuba = document.getElementById("cuba");
const costarica = document.getElementById("costarica");
const chile = document.getElementById("chile")
const Republicadominicana = document.getElementById("Republicadominicana");
const colombia= document.getElementById("colombia");
const nicaragua = document.getElementById("nicaragua");
const guatemala = document.getElementById("guatemala"); 
const Panama = document.getElementById("Panama");
const honduras = document.getElementById("honduras");
const peru = document.getElementById("peru");
const haiti =document.getElementById("haiti");
const venezuela = document.getElementById("venezuela1");
const uruguay = document.getElementById("uruguay");


function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}


paraguay.onclick = function(){
  speak(this.alt);
};

brasil.onclick = function() {
    speak(this.alt);

};

elsalvador.onclick = function(){
  speak(this.alt);
};

mexico.onclick = function() {
    speak (this.alt);

};

bolivia.onclick = function() {
    speak (this.alt);
};

argentina.onclick = function() {
    speak (this.alt);

};

cuba.onclick = function() {
    speak (this.alt);

};

costarica.onclick = function() {
    speak (this.alt);
};

chile.onclick = function() {
    speak (this.alt);
};

Republicadominicana.onclick = function() {
    speak (this.alt);

};

colombia.onclick = function() {
    speak (this.alt);

};

nicaragua.onclick = function() {
    speak (this.alt);
};

guatemala.onclick = function() { 
    speak (this.alt);
};

Panama.onclick = function() { 
    speak (this.alt);
};

honduras.onclick = function() {
    speak (this.alt);
};
venezuela.onclick = function(){
    speak (this.alt);
};

peru.onclick =function(){
    speak (this.alt);
};

haiti.onclick = function(){
    speak (this.alt);
 
};

uruguay.onclick = function(){
    speak(this.alt);
};

