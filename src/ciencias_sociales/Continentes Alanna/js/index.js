let sonido1 = new Audio("./multimedia/America.mp4");

function alertaAmerica(){

  
    const imageURL1 = "https://img.freepik.com/vector-premium/mapa-mundial-animales-america-ninos_81894-1211.jpg?w=2000" ;
    swal({
        title: "America",
        text: " El segundo continente más extenso del planeta se encuentra rodeado principalmente por el océano Atlántico y el Océano Pacífico. Se compone por 35 países formales y se hablan más de cuatro idiomas.",
        icon: imageURL1,
        button: "Cerrar",
      })
      sonido1.play();
}



function alertaEuropa(){

    const imageURL2 ="https://previews.123rf.com/images/alfazetchronicles/alfazetchronicles1701/alfazetchronicles170100042/69365213-del-mapa-de-europa-con-la-ilustraci%C3%B3n-del-vector-de-animales-de-la-fauna-la-flora-y-la-fauna-de-la-h.jpg";
    swal({
        title: "Europa",
        text: "Se encuentra limitada por los océanos, Ártico y Atlántico. Está conformada por 50 países, entre otros países no reconocidos, y se hablan cerca de 40 lenguas.",
        icon: imageURL2,
        button: "Cerrar",
      });

}
function alertaAsia(){
    const imageURL3 = "https://us.123rf.com/450wm/alfazetchronicles/alfazetchronicles1701/alfazetchronicles170100040/69365209-mapa-de-asia-con-la-ilustraci%C3%B3n-del-vector-de-animales-de-la-fauna-la-flora-y-la-fauna-de-la.jpg?ver=6";
    swal({
        title: "Asia",
        text: "Es el continente más poblado del planeta debido a que su superficie es muy extensa. Está compuesta por 48 países y se estima que se hablan cerca de 25 idiomas diferentes.",
        icon: imageURL3,
        button: "Cerrar",
      });

}
function alertaAfrica(){
    const imageURL4 ="https://img.freepik.com/vector-premium/conjunto-animales-safari-africa-mapa-animales-dibujos-animados_372699-184.jpg?w=2000";
    swal({
        title: "Africa",
        text: "Se dice que es la cuna de la humanidad, de donde provienen nuestros ancestros milenarios. Es el tercer continente más grande después de Asia y América. Está compuesta por 54 países y se estima que hay más de 1,700 lenguas.",
        icon: imageURL4,
        button: "Cerrar",
      });

}
function alertaOceania(){
    const imageURL5 ="https://previews.123rf.com/images/alfazetchronicles/alfazetchronicles1701/alfazetchronicles170100041/69365212-mapa-de-australia-con-la-ilustraci%C3%B3n-del-vector-de-animales-de-la-fauna-la-flora-y-la-fauna-de-la-hi.jpg";
    swal({
        title: "Oceania",
        text: "Contiene 14  países y otras dependencias. El país principal es Australia y luego las islas que lo rodean. Se destacan  más de 7 idiomas principales en donde destaca el inglés.",
        icon: imageURL5,
        button: "Cerrar",
      });

}
function alertaAntartida(){
    const imageURL6 ="https://previews.123rf.com/images/alfazetchronicles/alfazetchronicles1701/alfazetchronicles170100049/69365220-mapa-del-continente-ant%C3%A1rtico-con-la-ilustraci%C3%B3n-del-vector-de-animales-de-la-fauna-delf%C3%ADn-ballena-d.jpg";
    swal({
        title: "Antartida",
        text: "Con temperaturas bajas y con una superficie compuesta por una capa de hielo de más de 2 km se encuentra un continente donde, adaptarse a las condiciones climatológicas, es realmente difícil.",
        icon: imageURL6,
        button: "Cerrar",
      });

}