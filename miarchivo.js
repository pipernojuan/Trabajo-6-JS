function calcule (precio, cant, provincia) {
    let total = Math.trunc(precio / cant);
    document.getElementById("section").style.display = 'inline-block';
    switch(provincia){
        case "ushuaia":
            document.getElementById("provincia").innerHTML = 'Ushuaia';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        case "bariloche":
            document.getElementById("provincia").innerHTML = 'Bariloche';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        case "mendoza":
            document.getElementById("provincia").innerHTML = 'Mendoza';
            document.getElementById("cuotas").innerHTML = cant + " cuotas de: " + total;
            break;
        default:
            break;
    }
}


// Constructor

function capturar (){
    function Ciudad (nombre, epoca, gastronomia){
        this.nombre = nombre;
        this.epoca = epoca;
        this.gastronomia = gastronomia;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var epocaCapturar = document.getElementById("epoca").value;
    var gastronomiaCapturar = document.getElementById("gastronomia").value;

    nuevoSujeto = new Ciudad (nombreCapturar, epocaCapturar, gastronomiaCapturar);
    console.log(nuevoSujeto);
    agregar ();
};
    var baseDatos= [];
    function agregar() {
        baseDatos.push(nuevoSujeto)
        document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.epoca+'</td><td>'+nuevoSujeto.gastronomia+'</td></tbody>';
};


// DOM para Contador con Evento

const btnAgregar = document.querySelector('.btn-info');
const btnDisminuir = document.querySelector ('.btn-danger');
const span = document.getElementById('span');
let contador = 0;

btnAgregar.addEventListener('click', () => {
    console.log('Diste click efectivamente');
    contador++;
    span.textContent = contador
});

btnDisminuir.addEventListener('click', () => {
    console.log('Diste click efectivamente');
    contador--;
    span.textContent = contador
});


// Otro Evento

const btn = document.querySelector ('.btn-dark');
const bhSuccess = document.querySelector ('.bg-success');

btn.addEventListener('click', () => {
    console.log('Diste click efectivamente');
    prompt ("Hola Mundo");
});