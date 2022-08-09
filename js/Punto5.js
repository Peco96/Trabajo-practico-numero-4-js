// Punto 5
// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoDeNacimiento = anoDeNacimiento;
  }
  mostrarDatos() {
    document.write(`<ul>
      <li>Nombre: ${this.nombre}</li>
      <li>Edad: ${this.edad}</li>
      <li>DNI: ${this.DNI}</li>
      <li>sexo: ${this.sexo}</li>
      <li>Peso: ${this.peso}</li>
      <li>Altura: ${this.altura}</li>
      <li>Año de Nacimiento: ${this.anoDeNacimiento}</li>
      </ul>`);
  }
}
let nombres = prompt("Ingrese un Nombre");
let edades = prompt("Ingrese Edad");
let DNIs = prompt("Ingrese DNI");
let sexos = prompt("Ingrese Sexo (H hombre, M mujer) ");
let pesos = prompt("Ingrese Peso en kg ");
let alturas = prompt("Ingrese Altura en CM ");
let anosDeNacimiento = prompt("Ingrese Año de Nacimiento Ej:1980 ");
let nuevaPersona = new Persona(
  nombres,
  edades,
  DNIs,
  sexos,
  pesos,
  alturas,
  anosDeNacimiento
);
nuevaPersona.mostrarDatos();
if (anosDeNacimiento >= 1994 && anosDeNacimiento <= 2010) {
  document.write("Gerenaracion Z");
} else if (anosDeNacimiento >= 1981 && anosDeNacimiento <= 1993) {
  document.write("Gerenaracion Y");
} else if (anosDeNacimiento >= 1969 && anosDeNacimiento <= 1980) {
  document.write("Gerenaracion X");
} else if (anosDeNacimiento >= 1949 && anosDeNacimiento <= 1968) {
  document.write("Baby Boom");
} else if (anosDeNacimiento >= 1930 && anosDeNacimiento <= 1948) {
  document.write("Silent ageneration");
}
if(edades >= 18){
    document.write("<br>Mayor de edad")
}else{
    document.write("<br>Menor de edad")
}

document.write('<br>DNI numero Generado:'+ Math.random()*10000000)



