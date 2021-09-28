
// arrays:
let bebidas = ["cola", "lima", "naranja", "pomelo", "citrus"];
let comidas = ["pollo", "carne", "pizza", "pastas", "locro"]
let locales = ["recoleta", "palermo", "quilmes", "caballito"]

//forma de saber si existe un element en un array, o si hay un elemento divisible, etc
let hay_pollo = (element) => element === "pollo";

console.log(comidas.some(hay_pollo));

// rastra tambien si existe un elemento, pero tambien nos muestra cuando no.
locales.forEach(local =>{
    if(local === "recoleta"){
        console.log("hay local en recoleta")
    }
    console.log("no es en recoleta")
})

let numero = prompt("¿Quiere saber el número de locales, bebidas o comidas disponibles? escriba la palabra tal como fue escrita aquí");
let numero_total = ""
function numero_de_x(numero){
if (numero === "bebidas"){numero_total = bebidas.length};
if (numero === "comidas"){numero_total = comidas.length};
if (numero === "locales"){numero_total = locales.length};
document.write(`el número de ${numero} es ${numero_total}`)
}

numero_de_x(numero)

