
function mezclarColores() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
  
    // Convertir colores a formato hexadecimal
    var hex1 = color1.substring(1);
    var hex2 = color2.substring(1);
  
    // Obtener componentes RGB de cada color
    var r1 = parseInt(hex1.substring(0,2), 16);
    var g1 = parseInt(hex1.substring(2,4), 16);
    var b1 = parseInt(hex1.substring(4,6), 16);
    var r2 = parseInt(hex2.substring(0,2), 16);
    var g2 = parseInt(hex2.substring(2,4), 16);
    var b2 = parseInt(hex2.substring(4,6), 16);
  
    // Mezclar componentes RGB
    var r = Math.round((r1 + r2) / 2);
    var g = Math.round((g1 + g2) / 2);
    var b = Math.round((b1 + b2) / 2);
  
    // Convertir nuevo color a formato hexadecimal y mostrar resultado
    var hex = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    document.getElementById("resultado").style.backgroundColor = hex;
    document.getElementById("resultado").innerHTML = "La mezcla de " + color1 + " y " + color2 + " es " + hex;
  }