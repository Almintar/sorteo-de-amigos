// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = []

function agregarAmigo () {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "" || /\d/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista () {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo () {
    if (nombres.length === 0) {
        alert ("Debes agregar por lo menos un nombre para realizar el sorteo.");
        return;
    }

    const indiceAleatortio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatortio];
    document.getElementById("resultado").textContent = `El amigo sorteado es: ${nombreSorteado}`;
}

function reiniciarLista () {
    nombres = [];
    actualizarLista ();
    document.getElementById("resultado").textContent="";
}