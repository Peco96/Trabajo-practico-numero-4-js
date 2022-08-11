//punto 6
// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
  constructor(titulo, isbn, autor, numeroDePag) {
    this.titulo = titulo;
    this.isbn = isbn;
    this.autor = autor;
    this.numeroDePag = numeroDePag;
  }
  mostrarDatos() {
    document.write(`
       <br>El Libro: ${this.titulo} Con: ${this.isbn} Creado por el autor: ${this.autor} Tiene paginas: ${this.numeroDePag}`);
  }
  set modificarIsbn(nuevoIsbn) {
    this.isbn = nuevoIsbn;
  }
  get mostrarIsbn() {
    return this.isbn;
  }
  set modificarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }
  get mostrarTitulo() {
    return this.titulo;
  }
  set modificarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }
  get mostrarAutor() {
    return this.autor;
  }
  set modificarNumeroDePag(nuevoNumeroDePag) {
    this.numeroDePag = nuevoNumeroDePag;
  }
  get mostrarNumeroDePag() {
    return this.numeroDePag;
  }
}
let principito = new Libro(
  "Principito",
  "	9788498381498",
  "Antoine de Saint-Exupéry",
  "	96"
);
principito.mostrarDatos();
let SherlockHolmes = new Libro(
  "Sherlock Holmes",
  "	9788498258763",
  "Arthur Conan Doyle",
  "	315"
);
SherlockHolmes.mostrarDatos();
if (principito.numeroDePag < SherlockHolmes.numeroDePag) {
  document.write("<br>EL Principito tiene mas hojas que Sherlock Holmes");
} else {
  document.write("<br>EL Principito tiene menos hojas que Sherlock Holmes");
}
