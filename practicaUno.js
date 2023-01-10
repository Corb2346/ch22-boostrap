console.log("ya srive el js");

function cambiarNombre(){
    console.log("ya srive elboton");
    let nombre = prompt("Introduce tu nombre","Brayan");
    document.getElementById('cambiarNombre').innerHTML= nombre;
}