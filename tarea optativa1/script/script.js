const antiguedad_minima = confirm("¿Tiene usted mas de 3 meses de antiguedad?")

function iniciodecalculo (antiguedad_minima){
    if (antiguedad_minima === true){
        const antiguedad = prompt("¿Cuantos años de antiguedad tiene usted?")
        return antiguedad

    }
    else {alert("Disculpe, usted no es eligible para recibir una indemnización")}

}

const antiguedad = iniciodecalculo(antiguedad_minima);


function calculo (antiguedad) {

    if (antiguedad >= 1 && antiguedad <= 40){
    const monto = prompt("¿De cuanto era su salario?")
  return monto
}
    else { alert("Su antiguedad debe ser de 1 año a 40 años, cualquier otro número será invalido")}
}

let monto = calculo(antiguedad)

function monto_definitivo(antiguedad, monto){
    let monto_definitivo = monto * antiguedad
    return monto_definitivo
}

const final = monto_definitivo(antiguedad, monto)
document.write(`Su indeminización será de ${final}`)
