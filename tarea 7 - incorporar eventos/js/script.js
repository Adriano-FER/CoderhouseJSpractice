document.getElementById("button").addEventListener("click", makeCard);


function makeCard(){
    const nombre = document.querySelector("#fname")
    
    let name = nombre.value
    let main = document.querySelector("#fill")
    let div = document.createElement("div")
    div.classList.add("cardstyle");
    let card = document.createElement("card")

    let texto = document.createElement("p")

    texto.textContent = `Hola señor/a ${name}, esta es su tarjeta`
    main.appendChild(div);
    div.appendChild(card);
    card.append(texto);
    let form = document.querySelector("#form")
    form.remove()
}