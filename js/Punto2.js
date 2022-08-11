// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
// Rectángulos

let cuenta = {
    titular: "Alex",
    saldo: 0,
  
    //metodos
  
    ingresar: (c, deposito) => {
      c.saldo += deposito; //c.saldo=deposito+c.saldo
      console.log(c.saldo);
    },
    extraer: (c, retiro) => {
      if (c.saldo >= retiro) {
        c.saldo -= retiro;
        document.write(`<p>Se retiró $${retiro}</p>`);
      } else {
        document.write("<p>Saldo insuficiente</p>");
      }
    },
    informar: (c) => {
      //se pone como variable c para poder invocar la info de la cuenta
      console.log(c);
      document.write(
        `<p>La cuenta de ${c.titular} posee un saldo de $${c.saldo}</p>`
      );
    },
    transferir() {
      console.log(this);
    },
  };
  cuenta.informar(cuenta);
  
  //console.log(this)
  //habla del contexto de lo que estoy mostrando, muestra de window con muchos datos utiles, puedo usarlo en el contexto que corresponde para poder mostrar caracteristicas del objeto, esto se delimita dentro del scope
  
  let deposito = parseFloat(prompt("Ingrese el monto deseado"));
  
  cuenta.ingresar(cuenta, deposito);
  
  let retiro = parseFloat(prompt("Ingrese el monto a extraer"));
  
  cuenta.extraer(cuenta, retiro);
  
  cuenta.informar(cuenta);