var imagenes = ["yamaja3.png", "cagua1.png", "jonda2.png"];
var contador = 0;


function rotarImagenes() {
    document.getElementById("imagen").src = imagenes[contador];
    contador++;
    if (contador == imagenes.length) {
        contador = 0;
    }
    setTimeout("rotarImagenes()", 3000);
}



