
//variables.
let usuario = prompt("introduzca el nombre de usuario");
let dinero = prompt("¿Cuanto dinero tiene ustéd?")
let alcanza = (dinero >= 1000) ? "le alcanza para el paquete premiun" : "no le alcanza para el paquete premiun."
usuario = usuario.toUpperCase()

//comandos
console.log(alcanza)
document.write(usuario == "ADMIN" ? dinero > 500 ? "Es administrador y le alcanza" : "es administrador, pero no puede pagar": "No es administrador");
if (usuario === "USER" || usuario === "user") {
    document.write("<br> el usuario tiene una cuenta registrada")}
else if (usuario === "jorge" && dinero >= 1000) {
    console.log("jorge tiene mucho dinero")}
else {
    console.log("sin comentarios")}

