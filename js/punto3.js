//punto 3
class Rectangulo {
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    //metodos
    set cambiarAlto( alto=0 ) {
        this.alto = alto;
      }
    
      set cambiarAncho ( ancho = 0 ) {
        this.ancho = ancho;
      }
    
      get area() {
        return this.alto * this.ancho;
      }
}
    
    let obj = new Rectangulo();

    obj.cambiarAlto = prompt ('ingrese el alto');
    obj.cambiarAncho = prompt('ingrese el ancho');
    obj.area;
    
    console.log(obj.area)