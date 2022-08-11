//punto 6
// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
    constructor(isbn, titulo, autor, numeroDePag) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.numeroDePag = numeroDePag;
      
    }
    mostrarDatos() {
      document.write(`<ul>
        <li>Nombre: ${this.isbn}</li>
        <li>Edad: ${this.titulo}</li>
        <li>DNI: ${this.autor}</li>
        <li>sexo: ${this.numeroDePag}</li>
     
        </ul>`);
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
   
