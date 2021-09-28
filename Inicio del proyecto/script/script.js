const value = prompt("introduzca el valor de lo que quiere comprar")

const installment = confirm("¿Lo quiere pagar en cuotas?")

const taxes = true


function payment(value, installment) {
    let final = 0
    let start_phrase = ""
    if (installment === true) {
        final = value / 12
        start_phrase = "12 cuotas de"
    }
    if (installment === false) {
        final = value
        start_phrase = "una cuota de"
    }
    alert(`Usted debera pagar ${start_phrase} ${final}`)
    document.write(`Monto a pagar = ${final}`)
}

payment(value, taxes)

function import_tax (taxes, value) {
  let tax_value = 0
    if (taxes === true) {
        tax_value = (value * 21)/100
    }
    console.log(tax_value)
}

import_tax(taxes, value)
