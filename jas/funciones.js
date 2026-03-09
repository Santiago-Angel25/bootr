function saludar(){
    var nombre = document.getElementById("nombre").value;

    alert("Holas por alert " + nombre);
    console.log("hola por consola" + nombre);
}
function edad(){
    var edad = document.getElementById("edad").value;

    if(edad>0 && edad <18 ){
        alert("menor de edad ");
    }else if (edad >=18 && edad <120){
        alert("mayor de edad ");
    }else
        alert("error al digitar la edad ")

}

function cambiarContendio(){
    document.getElementById("texto").innerHTML = " Nuevo Texto Nuevo texto"
}


function cambiarvalor(){

    document.getElementById("nombre").value = "Santiago"

}

function mostrar(index){
    if(index == 1){
        document.getElementById("foto").src= "WhatsApp Image 2026-02-12 at 9.42.25 PM.jpeg";

    }else{
        document.getElementById("foto").src= "IMG_9639.PNG";
    }
}

function bordear(index){
    if(index == 1){
        document.getElementById("foto").className="estilos1";

    }else{
        document.getElementById("foto").className = "estilos2";
    }
}