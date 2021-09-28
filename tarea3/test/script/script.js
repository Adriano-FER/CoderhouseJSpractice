const numero1 = prompt("introduzca un número")
let numero1final 
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(numero1 * element)
    numero1final = numero1 * element

}

document.write(`Su número multiplicado por 10 es igual a ${numero1final} <br>`)

for (let index = 1; index < 10; index++) {
    const element = index;
    if ((element % 2 ) === 0 && (element % 3 ) === 0) {console.log( element + " es multiplo de 2 y de 3")}
    else if (element % 2  === 0) {console.log( element + " es multiplo de 2")}
    else if (element % 3  === 0) {console.log( element + " es multiplo de 3")}
}


let infinito = false
do {
    document.write("Tenemos un do while infinito, pero por suerte la variable está en " + infinito)
} while(infinito)

let while_infinito = confirm("¿Desea tener un while infinito?, tranquilo tiene un freno en cada loop")

while(while_infinito) {
    console.log("soy infinito")
    while_infinito = confirm("¿Desea que siga?")
}