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
      alert(`YOU CHOOSED ${this.alias}`)
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
elegir()

function elegir() {
  let choose = null
  let index = 0
  do {

    let dialog_box = confirm(`¿Desea elegir a ${available_fighter[index].alias}?`)
    if (dialog_box) {
      choosed_fighter.push(available_fighter[index]), available_fighter[index].choose(), choose = true
    }
    index++
  } while (!choose && available_fighter.length > index);
  yaelegido()
}

function yaelegido() {
  choosed_fighter.forEach(element => {
    let each_figter = `
    <div class="row d-flex">
    <div class="card text-center" style="width: 18rem;">
    <h2>YOUR FIGHTER</h2>
  <img class="card-img-top" src=${element.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.alias}</h5>
    <p class="card-text"> Elegiste a ${element.name}, habitante del ${Scorpion.realm} y que su fatality es ${Scorpion.fatality}</p>
    <a href="#" class="btn btn-primary">No hago nada</a>
   </div>
  </div>
  </div>

`
    document.write(each_figter)
  });
}
console.log(available_fighter)
function iniciarpelea(available_fighter, choosed_fighter)
{ 
resultado = pelear(available_fighter, choosed_fighter)
return resultado
}



function pelear(available_fighter, choosed_fighter) {
  let injured_fighter = null
  let opponent = [];
  opponent = available_fighter
  let myfighter = choosed_fighter[0]
  opponent = opponent.filter(obj => obj.alias !== myfighter.alias)
  opponent = opponent[Math.floor(opponent.length * Math.random())]
  alert(`${myfighter.alias} VS ${opponent.alias}`)
  if (opponent.stadistics.attack >= myfighter.stadistics.attack) {
    const resultado = calcularDaño(opponent.stadistics , myfighter.stadistics);
    myfighter.stadistics.hitpoints += resultado;
    myfighter.alive = myfighter.stadistics.hitpoints > 0 ? true : false;
    injured_fighter = myfighter;
    alert(`${opponent.alias} WINS, FLAWLESS VICTORY`)
    return injured_fighter
  }
  const resultado = calcularDaño(myfighter.stadistics, opponent.stadistics);
    opponent.stadistics.hitpoints += resultado;
    opponent.alive = opponent.stadistics.hitpoints > 0 ? true : false;
    injured_fighter = opponent;
    alert(`${myfighter.alias} WINS, FLAWLESS VICTORY`)
  return injured_fighter
}

function calcularDaño(atacante , defensor) {
  const resultado = defensor.defense >= atacante.attack ? 0 :  defensor.defense - atacante.attack;
  return resultado;
}

let resultado_final = iniciarpelea(available_fighter, choosed_fighter);

function guardar_resultado(resultado_final, available_fighter){
  var foundIndex = available_fighter.findIndex(x => x.id === resultado_final.id);
  if (foundIndex === -1) {console.log("no se pudo encontrar, por lo tanto no se pudo guardar")}
  available_fighter[foundIndex] = resultado_final;
}

guardar_resultado(resultado_final, available_fighter)
console.log(available_fighter)
console.log("el primer array son los luchadores disponibles y el segundo se guardan con la vida que les quedo")