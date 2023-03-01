function contenidos_s(){
    let entrada2, continentes2, nombres2, masas2, poblacion2, error2
    entrada2 = document.getElementById('textos1').value;
    continentes2 = document.getElementById('continentes')
    nombres2 = document.getElementById('contenido1')
    masas2 = document.getElementById('masas')
    poblacion2 = document.getElementById('poblacion')
    error2 = document.getElementById('default')

    switch(entrada2){

        case 'Continentes': continentes2.style.display = 'block';
                            nombres2.style.display = 'none';
                            masas2.style.display = 'none';
                            poblacion2.style.display = 'none';
                            error2.style.display = 'none';
        break;

        case 'Nombres': nombres2.style.display = 'block';
                        continentes2.style.display = 'none';
                        masas2.style.display = 'none';
                        poblacion2.style.display = 'none';
                        error2.style.display = 'none';
        break;

        case 'Extensiones': masas2.style.display = 'block';
                            nombres2.style.display = 'none';
                            continentes2.style.display = 'none';
                            poblacion2.style.display = 'none';
                            error2.style.display = 'none';
        break;

        case 'Poblacion': poblacion2.style.display = 'block';
                          masas2.style.display = 'none';
                          nombres2.style.display = 'none';
                          continentes2.style.display = 'none';
                          error2.style.display = 'none';
        break;

        default: error2.style.display = 'block';
                 poblacion2.style.display = 'none';
                 masas2.style.display = 'none';
                 nombres2.style.display = 'none';
                 continentes2.style.display = 'none';
        break;

    }

if(entrada2 = ""){
    alert("Ingrese contenido")
}   

}