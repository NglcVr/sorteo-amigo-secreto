let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación con expresiones regulares (regex),: solo letras y espacios
    const regex = /^[A-Za-z\s]+$/;

    if (nombreAmigo === "" || !regex.test(nombreAmigo)) {
        alert("Por favor, inserte un nombre. Solo se permiten letras y espacios.");
        return; // Detiene la función si el nombre no es válido
    }

    // Evita nombres ingresados duplicados, informa con alert
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue agregado");
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = ""; // Limpia el campo de entrada
    mostrarAmigos();
    console.log(nombreAmigo);
}


// Función para mostrar la lista de amigos
    function mostrarAmigos() {
        let lista = document.getElementById('listaAmigos');

        lista.innerHTML = ""; // Limpia la lista

        amigos.forEach((amigo) => {
            let elemento = document.createElement('li');
            elemento.textContent = amigo;
            lista.appendChild(elemento);
        });
    }

// Función para sortear un amigo.
function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return; // Detiene la función si no hay o no quedan amigos por sortear.
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Ya se sortearon todos los nombres");
        reiniciarSorteo(); // Reinicia automáticamente el sorteo.
        return;
    }

    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Su amigo secreto es: " + amigoSorteado;
    amigosSorteados.push(amigoSorteado);

    // Reinicia automáticamente, cuando se sortearon todos
    if (amigosSorteados.length === amigos.length) {
        setTimeout(() => {
            alert("Ya no quedan más nombres por sortear. El sorteo se reiniciará.");
            reiniciarSorteo();
        }, 100); // Tiempo de retraso, para el nuevo sorteo si es que no hace click en aceptar.
    }
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    amigosSorteados = [];
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = "";
}