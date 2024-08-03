const formulario = document.getElementById('formulario');
const mostrar = document.getElementById('mostrar');


let frase_a_traducir = ''
let texto_a_mostrar = ' '

function mostrarInformacion(){
    mostrar.innerHTML = `<h4>${texto_a_mostrar}</h4>`
}

function reemplazarVocales(cadena_de_texto) {
    // Mapa de vocales para reemplazo
    const vocales = { 'a': 'e', 'e': 'i', 'i': 'o', 'o': 'u', 'u': 'a', 
                      'á': 'é', 'é': 'í', 'í': 'ó', 'ó': 'ú', 'ú': 'á',
                      'A': 'E', 'E': 'I', 'I': 'O', 'O': 'U', 'U': 'A',
                      'Á': 'É', 'É': 'Í', 'Í': 'Ó', 'Ó': 'Ú', 'Ú': 'Á'};
    
    // Reemplazar todas las vocales usando una función de reemplazo
    return cadena_de_texto.replace(/[aeiouáéíóú]/gi, match => vocales[match]);
}

function copiarAlPortapapeles(){
    const textoACopiar = texto_a_mostrar;

    navigator.clipboard.writeText(textoACopiar).then(() => {
        console.log('Texto copiado al portapapeles: ' + texto_a_mostrar);

        Toastify({
            text: "Texto copiado al portapapeles 👍",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #FBCF35, #ED462F)"
            },
            onclick: function(){}
        }).showToast();

      }).catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

        frase_a_traducir = document.getElementById('frase_a_traducir').value;
        let campoEntrada = document.getElementById('frase_a_traducir');

        console.log(frase_a_traducir);

        texto_a_mostrar = reemplazarVocales(frase_a_traducir);

        campoEntrada.value = '';

        copiarAlPortapapeles();
        mostrarInformacion();
})

// Desde aqui comienza la lógica del modal en el footer del html

let estaAbierto = open

let botonFooter = document.getElementById('botonfooter');
let dialog = document.querySelector('dialog');
let cerrarBoton = document.querySelector('article header button');



botonFooter.addEventListener("click", function(event){
    event.preventDefault();
    dialog.showModal();

})

cerrarBoton.addEventListener('click', function(event){
    event.preventDefault();
    dialog.close();
})

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.close();
    }
  }