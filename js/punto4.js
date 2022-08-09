//Punto 4
// Escribe una clase Producto para crear objetos.
//Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarDatos() {
    document.write(`<ul>
    <li>Codigo: ${this.codigo}</li>
    <li>Nombre: ${this.nombre}</li>
    <li>Precio: ${this.precio}</li>
    
    </ul>`);
  }
}
let powered = new Producto(321654, "Powerade", "$240");
let coca = new Producto(321854, "Coca-Cola 3L", "$320");
let monster = new Producto(35876, "Monter 600ml", "$260");
powered.mostrarDatos();
coca.mostrarDatos();
monster.mostrarDatos();
