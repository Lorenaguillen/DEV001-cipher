const cipher = {

  encode: function (offset, string) {
    
    if (typeof offset !== "number" || offset == 0) throw new TypeError("Debes ingresar caracteres permitidos");
    if (typeof string !== "string" || string == "") throw new TypeError("Debes ingresar todos los parámetros");
    let resultado = "";


    for (let i = 0; i < string.length; i++) { //calcula el largo que tiene la palabra ingresada y recorre cada letra con el "for"
      let x = string.charCodeAt(i); //la variable para mi palabra. CharCodeAt ubicará mi código ASCII en el alfabeto y no dará el número que corresponde

      if (x >= 65 && x <= 90) { //condicional con los máximos y mínimos para mi variable

      resultado += String.fromCharCode(((x - 65 + offset) % 26) + 65); //fórmula césar. fromCharCode convertirá el número ASCII en una letra
     
      }

      else {
        resultado += string.charAt(i); // este comando permite que se reconozcan los espacions de mi texto ingresado
      }

    }

    return resultado; //queremos que regrese el valor

  },

  decode: function (offset, string) {
    let resultado = "";

    offset = ((26 - offset) % 26) + 26;
    resultado = this.encode(offset, string);
    return resultado

  }

}
export default cipher;




