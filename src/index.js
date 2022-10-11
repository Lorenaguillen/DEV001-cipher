import cipher from './cipher.js';

//comando inicial para que mi texto sea en mayúscula
document.getElementById("string").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
}, true);

//comando para codificar (de encode a decode)
document.getElementById("encode").addEventListener("click", function () { //al darle click al boton
    let string = document.getElementById("string").value; //insertar mi texto valor
    let offset = document.getElementById("offset").value; //número de espacios a desplazar
    let letras = parseInt(offset); //valida mi abecedario y convierte mi argumento cadena a número
    document.getElementById("string2").value = cipher.encode(letras, string); //genera mi código codificado en la segunda casilla
}, true);

//el comando decodificar funciona igual que el anterior pero a la inversa (de decode a encode)
document.getElementById("decode").addEventListener("click", function () {
    let string = document.getElementById("string").value;
    let offset = document.getElementById("offset").value;
    let letras = parseInt(offset);
    document.getElementById("string2").value = cipher.decode(letras, string);
}, true);

/*
//función para cifrar
function encode(string, offset) {
    let resultado = "";
for (let i = 0; i < string.length; i++) { //calcula el largo que tiene la palabra ingresada y recorre cada letra con el "for"
        let x = string.charCodeAt(i); //creo la variable para mi palabra. CharCodeAt ubicará mi código ASCII en el alfabeto y no dará el número que corresponde

       if (x >= 65 && x <= 90) { //condicional con los máximos y mínimos

            resultado += String.fromCharCode(((x - 65 + offset) % 26) + 65); //fórmula césar. fromCharCode convertirá el número ASCII en una letra
        }
    }
    return (document.getElementById("string2").value = resultado); //queremos que regrese el valor
}

//esta es mi función para decoficar
function decode(string, offset) {
    let resultado = "";
    offset = (26 - offset) % 26;
    resultado = encode(string, offset);
    return resultado;
}
*/


