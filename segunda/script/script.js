let choosed_fighter = [];
let available_fighter = [];



class Fighter {
  constructor(id, alias, name, realm, fatality, alive, img, stadistics) {
    this.id = id
    this.alias = alias;
    this.name = name;
    this.realm = realm;
    this.fatality = fatality;
    this.alive = alive;
    this.img = img;
    this.stadistics = new Estadisticas(stadistics.hitpoints, stadistics.defense, stadistics.attack);
    this.choose = function () {
      document.querySelector(".alert").textContent = `YOU CHOOSED ${this.alias}`
    }
    this.notchoose = function () {
      alert(`${this.alias} NOW HATES YOU`)
    }
  }
}

class Estadisticas {
  constructor(hitpoints, defense, attack) {
    this.hitpoints = hitpoints;
    this.defense = defense,
      this.attack = attack
  }
}
let selectedCardFighter = null

const imgSZ = "https://static.wikia.nocookie.net/mkwikia/images/e/ed/Sub-Zero_Mk11.png/revision/latest/scale-to-width-down/340?cb=20190323023757";
const imgSC = "https://static.wikia.nocookie.net/mkwikia/images/b/b6/Scorpion_MK11_3.png/revision/latest/scale-to-width-down/350?cb=20190405144918";
const imgKT = "https://static.wikia.nocookie.net/mkwikia/images/5/59/Kitana_mk11.png/revision/latest/scale-to-width-down/1000?cb=20190413032708"
const Scorpion = new Fighter(0, "SCORPION", "Hanzo Hasashi", "Netherrealm", "Toasty", true, imgSC, {
  hitpoints: 80,
  defense: 20,
  attack: 60
});
const SubZero = new Fighter(1, "SUB-ZERO", "Kuai Liang", "Earthrealm", "Spine Rip", true, imgSZ, {
  hitpoints: 150,
  defense: 40,
  attack: 20
});
const Kitana = new Fighter(2, "KITANA", "Kitana Kahn", "Outworld", "Kiss of Death", true, imgKT, {
  hitpoints: 50,
  defense: 30,
  attack: 40
});
const count = available_fighter.push(Scorpion, SubZero, Kitana)


//elegir()

// function elegir() {
//   let choose = null
//   let index = 0
//   do {

//     let dialog_box = confirm(`¿Desea elegir a ${available_fighter[index].alias}?`)
//     if (dialog_box) {
//       choosed_fighter.push(available_fighter[index]), available_fighter[index].choose(), choose = true
//     }
//     index++
//   } while (!choose && available_fighter.length > index);
//   yaelegido()
// }


function Start_menu() {
  const cards_row = document.querySelector("#main")
  available_fighter.forEach(element => {
    let container = document.createElement("div");
    container.classList.add("col-4");

    let card_frame = document.createElement("card");
    card_frame.classList.add("card");
    card_frame.classList.add("fade-in");
    let card_body = document.createElement("card-body")
    card_body.classList.add("card-body")
    let card_title = document.createElement("h5");
    card_title.textContent = element.alias
    let card_img = document.createElement('img');
    card_img.src = element.img;
    let card_text = document.createElement("p");
    card_text.classList.add("p");
    card_text.textContent = `
    Elegiste a ${element.name}, habitante del ${element.realm} y que su fatality es ${element.fatality}`
    let choosebtn = document.createElement("button");
    choosebtn.setAttribute("id", `btn${element.id}`)
    choosebtn.innerHTML = "Choose me";
    choosebtn.setAttribute("data-id", element.id)
    choosebtn.setAttribute("data-select", false)
    card_body.append(card_img)
    card_body.append(card_title)
    card_body.append(card_text)
    card_body.appendChild(choosebtn);

    card_frame.appendChild(card_body);
    container.appendChild(card_frame);
    cards_row.appendChild(container);


  });
  choosing()

}

function choosing() {

  let btn0 = document.querySelector("#btn0")
  let btn1 = document.querySelector("#btn1")
  let btn2 = document.querySelector("#btn2")

  btn0.addEventListener("click", choose)
  btn1.addEventListener("click", choose)
  btn2.addEventListener("click", choose)
}


function choose(e) {
  const elemento = e.target;
  const myid = elemento.getAttribute("data-id");
  choosed_fighter.push(available_fighter[myid]), available_fighter[myid].choose(), choose = true
  const myfighterJson = JSON.stringify(available_fighter[myid]);
  localStorage.setItem("MySavedFighter", myfighterJson)
  elemento.setAttribute("data-select", true)
  const otherelements = document.querySelectorAll("[data-select = false]")


  otherelements.forEach(element => {
    const padre = element.parentElement;
    const abuelo = padre.parentElement;
    abuelo.classList.add("fade-out");
  });

  setTimeout(() => {
    
    return yaelegido(otherelements, elemento)
  }, 3000);

}

//function otraforma(){

//}

Start_menu()

function yaelegido(arrelements, selectedFighter) {

  let bisabueloFighter = selectedFighter.parentElement.parentElement.parentElement
  selectedCardFighter = selectedFighter.parentElement.parentElement
  arrelements.forEach(element => {
    const padre = element.parentElement;
    const abuelo = padre.parentElement;
    const bisabuelo = abuelo.parentElement;
    bisabuelo.remove()
  });

  switch (selectedFighter.getAttribute("data-id")) {

    case "0":

      bisabueloFighter.classList.add("slide-right");

      break;
    case "1":
      bisabueloFighter.classList.add("offset-4");
      break;
    case "2":
      bisabueloFighter.classList.add("offset-8");
      bisabueloFighter.classList.add("slide-left");
      break;
  }

  setTimeout(() => {
    return iniciarpelea(available_fighter, choosed_fighter)
  }, 3000);

}



function iniciarpelea(available_fighter, choosed_fighter) {
  resultado = pelear(available_fighter, choosed_fighter)
  
}




function pelear(available_fighter, choosed_fighter) {
  let injured_fighter = null
  let opponent = [];
  opponent = available_fighter
  let myfighter = choosed_fighter[0]
  opponent = opponent.filter(obj => obj.alias !== myfighter.alias)
  opponent = opponent[Math.floor(opponent.length * Math.random())]
  document.querySelector(".alert").textContent = `${myfighter.alias} VS ${opponent.alias}`

  setTimeout(() => {


    if (opponent.stadistics.attack >= myfighter.stadistics.attack) {
      const resultado = calcularDaño(opponent.stadistics, myfighter.stadistics);
      myfighter.stadistics.hitpoints += resultado;
      myfighter.alive = myfighter.stadistics.hitpoints > 0 ? true : false;
      injured_fighter = myfighter;
      document.querySelector(".alert").textContent = `${opponent.alias} WINS, FLAWLESS VICTORY`
      let lostFightSave = JSON.stringify(`lost battle to ${opponent.alias}`)
      localStorage.setItem("LostFight", lostFightSave)
      return injured_fighter
    }
    const resultado = calcularDaño(myfighter.stadistics, opponent.stadistics);
    opponent.stadistics.hitpoints += resultado;
    opponent.alive = opponent.stadistics.hitpoints > 0 ? true : false;
    injured_fighter = opponent;
    document.querySelector(".alert").textContent = `${myfighter.alias} WINS, FLAWLESS VICTORY`
    let wonFightSave = JSON.stringify(`won battle against ${opponent.alias}`)
    localStorage.setItem("WonFight", wonFightSave)
    victoriousPose(selectedCardFighter, myfighter.alias, injured_fighter)
  
  }, 4000);
}

function victoriousPose(selectedCardFighter, winneralias, injured_fighter) {
  let imgtochange = selectedCardFighter.querySelector("img")
  let url = null
  switch (winneralias) {
    case "SCORPION":
     url = "https://static.wikia.nocookie.net/mkmobile/images/5/5e/Scorpion_a3.png/revision/latest/scale-to-width-down/1000?cb=20200803171759&path-prefix=es"

      break;
    case "SUB-ZERO":

      break;
    case "KITANA":

      break;
  }
  imgtochange.src = url;
  return guardar_resultado(injured_fighter, available_fighter)
}

function calcularDaño(atacante, defensor) {
  const resultado = defensor.defense >= atacante.attack ? 0 : defensor.defense - atacante.attack;
  return resultado;
}


function guardar_resultado(resultado_final, available_fighter) {
  var foundIndex = available_fighter.findIndex(x => x.id === resultado_final.id);
  if (foundIndex === -1) {
    console.log("no se pudo encontrar, por lo tanto no se pudo guardar")
  }
  available_fighter[foundIndex] = resultado_final;
  console.log(available_fighter)
  console.log(getRecord())
}


function getRecord(){
const lostfight = JSON.parse(localStorage.getItem("LostFight"));
const wonfight = JSON.parse(localStorage.getItem("WonFight"))
return lostfight || wonfight ? {wonfight : wonfight, lostfight : lostfight} : console.log("couldn't find anything")
}

