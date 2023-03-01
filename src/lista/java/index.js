//Tarea Lunes

const input = document.getElementById('tareasLun');
const botonGuardar = document.getElementById("botonLunes");
const div = document.querySelector('.tareaLun');

botonGuardar.addEventListener('click', () => {
  let valoresGuardados = JSON.parse(localStorage.getItem('valoresLunes')) || [];
  valoresGuardados.push(input.value);

  localStorage.setItem('valoresLunes', JSON.stringify(valoresGuardados));
  div.innerHTML = generarHtml(valoresGuardados);
});

div.addEventListener('click', (event) => {
  const elemento = event.target;
  if (elemento.classList.contains('borrar-tarea')) {
    const valoresGuardados = JSON.parse(localStorage.getItem('valoresLunes')) || [];
    const indice = parseInt(elemento.dataset.indice, 10);
    valoresGuardados.splice(indice, 1);
    localStorage.setItem('valoresLunes', JSON.stringify(valoresGuardados));
    div.innerHTML = generarHtml(valoresGuardados);
  }
});
div.classList.add("task");
let valoresGuardados = JSON.parse(localStorage.getItem('valoresLunes')) || [];
div.innerHTML = valoresGuardados.map((tarea, index) => {
  return `
    <div>
      <span id="tarea-${index}">${tarea}</span>
      <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
    </div>
  `;
}).join('<br>');

div.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const id = event.target.id.split('-')[1];
    const valoresGuardados = JSON.parse(localStorage.getItem('valoresLunes')) || [];
    valoresGuardados.splice(id, 1);
    localStorage.setItem('valoresLunes', JSON.stringify(valoresGuardados));
    div.innerHTML = valoresGuardados.map((tarea, index) => {
      return `
        <div>
          <span id="tarea-${index}">${tarea}</span>
          <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
        </div>
      `;
    }).join('<br>');
  }
});

//Tarea Lunes

 //Tarea martes
 const input1 = document.getElementById('tareasMar');
 const botonGuardar1 = document.getElementById("botonMartes");
 
 botonGuardar1.addEventListener('click', () => {
   let valoresGuardados1 = JSON.parse(localStorage.getItem('valoresMartes')) || [];
   valoresGuardados1.push(input1.value);
 
   localStorage.setItem('valoresMartes', JSON.stringify(valoresGuardados1));
 });
 
 const div1 = document.querySelector("#TaraeMar")
 div1.classList.add("task");
let valoresGuardados1 = JSON.parse(localStorage.getItem('valoresMartes')) || [];
div1.innerHTML = valoresGuardados1.map((tarea, index) => {
  return `
    <div>
      <span id="tarea-${index}">${tarea}</span>
      <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
    </div>
  `;
}).join('<br>');

div1.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const id = event.target.id.split('-')[1];
    const valoresGuardados1 = JSON.parse(localStorage.getItem('valoresMartes')) || [];
    valoresGuardados1.splice(id, 1);
    localStorage.setItem('valoresMartes', JSON.stringify(valoresGuardados1));
    div1.innerHTML = valoresGuardados1.map((tarea, index) => {
      return `
        <div>
          <span id="tarea-${index}">${tarea}</span>
          <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
        </div>
      `;
    }).join('<br>');
  }
});
 

 //Tarea martes

  //Tarea miercoles
  const input2 = document.getElementById('tareasMier');
  const botonGuardar2 = document.getElementById("botonMiercoles");
  
  botonGuardar2.addEventListener('click', () => {
    let valoresGuardados2 = JSON.parse(localStorage.getItem('valoresMiercoles')) || [];
    valoresGuardados2.push(input2.value);
  
    localStorage.setItem('valoresMiercoles', JSON.stringify(valoresGuardados2));
  });
  
  const div2 = document.querySelector("#TareaMier")
  div2.classList.add("task");
 let valoresGuardados2 = JSON.parse(localStorage.getItem('valoresMiercoles')) || [];
 div2.innerHTML = valoresGuardados2.map((tarea, index) => {
   return `
     <div>
       <span id="tarea-${index}">${tarea}</span>
       <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
     </div>
   `;
 }).join('<br>');
 
 div2.addEventListener('click', (event) => {
   if (event.target.tagName === 'IMG') {
     const id = event.target.id.split('-')[1];
     const valoresGuardados2 = JSON.parse(localStorage.getItem('valoresMiercoles')) || [];
     valoresGuardados2.splice(id, 1);
     localStorage.setItem('valoresMiercoles', JSON.stringify(valoresGuardados2));
     div2.innerHTML = valoresGuardados2.map((tarea, index) => {
       return `
         <div>
           <span id="tarea-${index}">${tarea}</span>
           <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
         </div>
       `;
     }).join('<br>');
   }
 });
  
  //Tarea miercoles

    //Tarea jueves
    const input3 = document.getElementById('tareasJuev');
    const botonGuardar3 = document.getElementById("botonJueves");
    
    botonGuardar3.addEventListener('click', () => {
      let valoresGuardados3 = JSON.parse(localStorage.getItem('valoresJueves')) || [];
      valoresGuardados3.push(input3.value);
    
      localStorage.setItem('valoresJueves', JSON.stringify(valoresGuardados3));
    });
    
    const div3 = document.querySelector("#TareaJueee")
    div3.classList.add("task");
   let valoresGuardados3 = JSON.parse(localStorage.getItem('valoresJueves')) || [];
   div3.innerHTML = valoresGuardados3.map((tarea, index) => {
     return `
       <div>
         <span id="tarea-${index}">${tarea}</span>
         <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
       </div>
     `;
   }).join('<br>');
   
   div3.addEventListener('click', (event) => {
     if (event.target.tagName === 'IMG') {
       const id = event.target.id.split('-')[1];
       const valoresGuardados3 = JSON.parse(localStorage.getItem('valoresJueves')) || [];
       valoresGuardados3.splice(id, 1);
       localStorage.setItem('valoresJueves', JSON.stringify(valoresGuardados3));
       div3.innerHTML = valoresGuardados3.map((tarea, index) => {
         return `
           <div>
             <span id="tarea-${index}">${tarea}</span>
             <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
           </div>
         `;
       }).join('<br>');
     }
   });
    
    //Tarea jueves

       //Tarea viernes
       const input4 = document.getElementById('tareasVie');
       const botonGuardar4 = document.getElementById("botonViernes");
       
       botonGuardar4.addEventListener('click', () => {
         let valoresGuardados4 = JSON.parse(localStorage.getItem('valoresViernes')) || [];
         valoresGuardados4.push(input4.value);
       
         localStorage.setItem('valoresViernes', JSON.stringify(valoresGuardados4));
       });
       
       const div4 = document.querySelector("#TareaVie")
       div4.classList.add("task");
      let valoresGuardados4 = JSON.parse(localStorage.getItem('valoresViernes')) || [];
      div4.innerHTML = valoresGuardados4.map((tarea, index) => {
        return `
          <div>
            <span id="tarea-${index}">${tarea}</span>
            <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
          </div>
        `;
      }).join('<br>');
      
      div4.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
          const id = event.target.id.split('-')[1];
          const valoresGuardados4 = JSON.parse(localStorage.getItem('valoresViernes')) || [];
          valoresGuardados4.splice(id, 1);
          localStorage.setItem('valoresViernes', JSON.stringify(valoresGuardados4));
          div4.innerHTML = valoresGuardados4.map((tarea, index) => {
            return `
              <div>
                <span id="tarea-${index}">${tarea}</span>
                <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
              </div>
            `;
          }).join('<br>');
        }
      });
       
       //Tarea sabado  
       const input5 = document.getElementById('tareasSab');
       const botonGuardar5 = document.getElementById("botonSabado");
       
       botonGuardar5.addEventListener('click', () => {
         let valoresGuardados5 = JSON.parse(localStorage.getItem('valoresSabado')) || [];
         valoresGuardados5.push(input5.value);
       
         localStorage.setItem('valoresSabado', JSON.stringify(valoresGuardados5));
       });
       
       const div5 = document.querySelector("#TareaSab")
       div5.classList.add("task");
      let valoresGuardados5 = JSON.parse(localStorage.getItem('valoresSabado')) || [];
      div5.innerHTML = valoresGuardados5.map((tarea, index) => {
        return `
          <div>
            <span id="tarea-${index}">${tarea}</span>
            <img id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
          </div>
        `;
      }).join('<br>');
      
      div5.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
          const id = event.target.id.split('-')[1];
          const valoresGuardados5 = JSON.parse(localStorage.getItem('valoresSabado')) || [];
          valoresGuardados5.splice(id, 1);
          localStorage.setItem('valoresSabado', JSON.stringify(valoresGuardados5));
          div5.innerHTML = valoresGuardados5.map((tarea, index) => {
            return `
              <div>
                <span id="tarea-${index}">${tarea}</span>
                <img class="boton-borrar" id="eliminar-${index}" src="img/papelera.png" alt="Eliminar">
              </div>
            `;
          }).join('<br>');
        }
      });
       //Tarea sabaddo
       let refresh = botonGuardar
       refresh.addEventListener('click', _ => {
                   location.reload();
       })
       let refresh1 = botonGuardar1
       refresh1.addEventListener('click', _ => {
                   location.reload();
       })
       let refresh2 = botonGuardar2
       refresh2.addEventListener('click', _ => {
                   location.reload();
       })
       let refresh3 = botonGuardar3
       refresh3.addEventListener('click', _ => {
                   location.reload();
       })
       let refresh4 = botonGuardar4
       refresh4.addEventListener('click', _ => {
                   location.reload();
       })
       let refresh5 = botonGuardar5
       refresh5.addEventListener('click', _ => {
                   location.reload();
       })