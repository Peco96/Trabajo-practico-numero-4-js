// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto = {
    //propiedades -> clave: valor
    color:'negro',
    marca:'ford',
    modelo:'Ka',
    puertas:'5',
    
    //metodos son similares a funciones

    encender:() => {document.write('<p>Se encendió el auto</p>')},
    apagar:() => {document.write('<p>Se apagó el auto</p>')}
}
console.log(auto);