const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const fecha = document.querySelector("#fecha").value
    const ocupacion = document.querySelector("#ocupacin").value
    

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Datos ${nombre} tienes la edad de ${edad}`
}

//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)