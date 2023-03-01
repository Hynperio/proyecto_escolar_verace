function todo(){
    let input1, ver, liquido2, transicion2, los2, alcalinos2, solidos2, estructura2, tabla2, error1, bloques2, tipos2

    input1 = document.getElementById('Busqueda').value;
    ver = document.getElementById('mostrar')
    liquido2 = document.getElementById('liquido')
    transicion2 = document.getElementById('transicion')
    los2 = document.getElementById('antanidos_actinidos')
    alcalinos2 = document.getElementById('alcalinos')
    solidos2 = document.getElementById('solidos')
    estructura2 = document.getElementById('estructura')
    tabla2 = document.getElementById('tabla')
    error1 = document.getElementById('defaul')
    bloques2 = document.getElementById('desarrollo')
    tipos2 = document.getElementById('tipos')
    
    switch(input1){

        case 'gases': ver.style.display = 'block'; 
              liquido2.style.display = 'none';
              transicion2.style.display = 'none';
              los2.style.display = 'none';
              alcalinos2.style.display = 'none';
              solidos2.style.display = 'none';
              estructura2.style.display = 'none';
              tabla2.style.display = 'none';
              error1.style.display = 'none';
              tipos2.style.display = 'none';
              bloques2.style.display = 'none';

                let palabra = 'Hidrógeno'+ 'Nitrógeno' + 'Oxígeno' + 'Flúor' + 'Cloro' + 'Helio' + 'Neón' + 'Argón' + 'Kriptón' + 'Xenón' + 'Radón'
                     decir(palabra);
            
            function decir(texto){
                speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
            }
            
        break;

        case 'liquido': liquido2.style.display = 'block';
                ver.style.display = 'none'; 
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                estructura2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'transicion': transicion2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                estructura2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'lantanidos': los2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                estructura2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'alcalinos': alcalinos2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                solidos2.style.display = 'none';
                estructura2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'solidos': solidos2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                estructura2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'componentes': estructura2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                tabla2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'tabla': tabla2.style.display = 'block';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                estructura2.style.display = 'none';
                error1.style.display = 'none';
                tipos2.style.display = 'none';
                bloques2.style.display = 'none';
        break;

        case 'estructura': bloques2.style.display = 'block';
                error1.style.display = 'none';
                ver.style.display = 'none'; 
                liquido2.style.display = 'none';
                transicion2.style.display = 'none';
                los2.style.display = 'none';
                alcalinos2.style.display = 'none';
                solidos2.style.display = 'none';
                tabla2.style.display = 'none';
                tipos2.style.display = 'none';
                estructura2.style.display = 'none';
          
        break;

        case 'tipos': tipos2.style.display = 'block';
                      error1.style.display = 'none';
                        ver.style.display = 'none'; 
                        liquido2.style.display = 'none';
                        transicion2.style.display = 'none';
                        los2.style.display = 'none';
                        alcalinos2.style.display = 'none';
                        solidos2.style.display = 'none';
                        tabla2.style.display = 'none';
                        estructura2.style.display = 'none';
                        bloques2.style.display = 'none';
        break;

        default: error1.style.display = 'block';
                    ver.style.display = 'none'; 
                    liquido2.style.display = 'none';
                    transicion2.style.display = 'none';
                    los2.style.display = 'none';
                    alcalinos2.style.display = 'none';
                    solidos2.style.display = 'none';
                    tabla2.style.display = 'none';
                    estructura2.style.display = 'none';
                    bloques2.style.display = 'none';
                    tipos2.style.display = 'none';
        break;

}

if(input1 == ""){
    alert("Completa el input")
}


}