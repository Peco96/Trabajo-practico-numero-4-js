// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades
//--------
//agenda telefonica de contactos, un contacto esta definido por un nombre y un telefono, el nombre es unico
//la agenda contiene contactos y sera creada con un tamaño por defecto de 10 o el usuario podra modificar el tamaño

class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }
  
class Agenda {
    constructor(tamanio = 10) {
      this.contactos = [];
      this.tamanio = tamanio;
    }
    //metodo para agregar contacto
    agregarContacto(contactoNuevo) {
      //verificar si el contacto existe
      if (this.existeContacto(contactoNuevo.nombre) === true) {
        console.log("el contacto ya existe, no lo agrego");
      } else {
        //verificar si la agenda esta llena o tiene huecos vacios
        if (this.agendaLlena() === false) {
          this.contactos.push(contactoNuevo);
        }
      }
      console.log(this.contactos);
    }
    //metodo para ver si existe el contacto
    existeContacto(nombre) {
      //es porque el contacto existe
      const contactoExistente = this.contactos.find((itemContacto) => {
        return nombre === itemContacto.nombre;
      });
      console.log(contactoExistente);
      if (contactoExistente) {
        console.log("el contacto existe");
        return true;
      } else {
        console.log("el contacto no existe");
        return false;
      }
    }
    agendaLlena() {
      if (this.contactos.length === this.tamanio) {
        console.log("la agenda esta llena");
        return true;
      } else {
        console.log("hay espacio disponible");
        return false;
      }
    }
    eliminarContacto(nombre) {
      let contactosFiltrados = this.contactos.filter((itemContacto) => {
        return itemContacto.nombre != nombre;
      });
      this.contactos = contactosFiltrados;
      console.log("elemento eliminado");
      console.log(this.contactos);
    }
  }
  
  //crear agenda
  let agendaTelefonica = new Agenda();
  console.log(agendaTelefonica);
  //menu de opciones
  do {
    let opcion = parseInt(
      prompt(`Seleccione una opcion:
        1-Agregar un contacto,
        2-Consultar si el contacto existe,
        3-Lista de contactos,
        4-Buscar un contacto,
        5-Eliminar un contacto,
        6-Consultar si la agenda esta llena,
        7-Consultar si la agenda tiene huecos libres,
        8-Cambiar el tamaño de la agenda
        `)
    );
  
    switch (opcion) {
      case 1:
        //     1-Agregar un contacto,
        //pedir el nombre y telefono}
        let nombre = prompt(" ingrese un nombre");
        let telefono = prompt("ingrese un telefono");
        //crear el contacto
        let nuevoContacto = new Contacto(nombre, telefono);
        console.log(nuevoContacto);
        //invocar a agregarContacto
        agendaTelefonica.agregarContacto(nuevoContacto);
        console.log(this.contactos);
        break;
      case 2:
        // 2-Consultar si el contacto existe,
        let nombreBuscado = prompt("ingrese un nombre");
        agendaTelefonica.existeContacto(nombreBuscado);
        break;
      case 3:
        // 3-Lista de contactos,
        break;
      case 4:
        // 4-Buscar un contacto,
        break;
      case 5:
        // 5-Eliminar un contacto,
        let contactoBorrar = prompt("ingrese un nombre");
        agendaTelefonica.eliminarContacto(contactoBorrar);
        break;
      case 6:
        // 6-Consultar si la agenda esta llena,
        break;
      case 7:
        // 7-Consultar si la agenda tiene huecos libres,
        break;
      case 8:
        // 8-Cambiar el tamaño de la agenda
        break;
      default:
        alert("Opcion incorrecta");
    }
  } while (confirm("quiere realizar otra operación?"));