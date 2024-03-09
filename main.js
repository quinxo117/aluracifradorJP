var copiada = "";
let vocales = ['a',     'e',        'i',    'o',    'u'];
let valores = ['ai',    'enter',    'imes', 'ober', 'ufat'];
let enumED = {encripte: 1, desencripte: 0}

let mError = "Esto tiene mayúsculas, esto no es permitido y se tratará como minúsculas ";
let mAdvertencia = "El texto está vacío, te invito a que lo llenes con una frase en minúsculas";

function krypto(selector, destino, tipo) {
    var contenido = document.querySelector(selector); // crea una variable contenido y obtiene el contenido del elemento seleccionado por el selector "selector": Se utiliza querySelector para obtener el elemento en el html que seria el texto del textarea
    let strMay = contenido.value; //Se crea la variable StrMay y luego se accede a su propiedad value para obtener el texto.
    if (strMay == "") {  // Si esta variable strMay esta vacia
        alert(mAdvertencia); // mostrara una alerta
        contenido.select(); // Esta línea selecciona el texto dentro del elemento contenido. Esto permite al usuario copiar y pegar fácilmente el texto encriptado.
        return; // Esta línea termina la función krypto y devuelve el control al código que la llamó.
    }

     /* Revisamos si hay algo en mayúsculas */
    var text_salida = document.querySelector(destino); // Busca en el segundo elemento de la funciona que a la vez es el elemento del texto salida
    if (/[A-Z]/.test(strMay)) {
        alert(mError);
        strMay = strMay.toLowerCase();
    }

    if (tipo === enumED.encripte) {
        for (let i=0; i < vocales.length; i++) {
            strMay = strMay.replaceAll(vocales[i], valores[i].toUpperCase());
        }
    }
    else { 
        for (let i=0; i < vocales.length; i++) {
            strMay = strMay.replaceAll(valores[i], vocales[i].toUpperCase());
        }
    }
    text_salida.textContent = strMay.toLowerCase();    
}

function copiar(selector, destino) {
    var textDestino = document.querySelector(destino);
    var textSelector = document.querySelector(selector);
    textDestino.select();
    document.execCommand("copy");
    /*copiada = textDestino.value;
    textSelector.value = '';
    textSelector.value = copiada;
    console.log(copiada);
    textSelector.select();
    textDestino.blur();
    textSelector.blur();*/
}



