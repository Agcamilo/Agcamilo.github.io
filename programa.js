const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById("valor-actual");
const botonesnumeros = document.querySelectorAll(".numero");
const botonesoperadores = document.querySelectorAll(".operador");

const display2 = new display(displayValorAnterior, displayValorActual);

botonesnumeros.forEach(boton => {
    boton.addEventListener('click', () => display2.agregarNumero(boton.innerHTML));
});

botonesoperadores.forEach(boton =>{
    boton.addEventListener('click', () => display2.computar(boton.value))
});