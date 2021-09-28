//ejemplo de objeto:
const tutor = {
    nombre: "Junior",
    edad: 30,
    mas_grande_deseo: "aprobar a adriano",
}

//este era el ejemplo básico del profesor, y se accede de la siguiente manera:
console.log(tutor.nombre)
console.log(tutor.edad)
console.log(tutor.mas_grande_deseo)

//constructor, que voy a usar para el ejercicio.

function Fighter(alias, name, realm, fatality, alive, img){
    this.alias = alias;
    this.name = name;
    this.realm = realm;
    this.fatality = fatality;
    this.alive = alive;
    this.img = img
    this.choose = function(){
        alert(`YOU CHOOSED ${this.alias}`)}
}
/* tambien podía ser:
class Fighter {
    constructor (alias, name){
        this.alias = alias;
        this.saldo = saldo;
    }
}
*/
const imgSZ = "https://static.wikia.nocookie.net/mkwikia/images/e/ed/Sub-Zero_Mk11.png/revision/latest/scale-to-width-down/340?cb=20190323023757";
const imgSC = "https://static.wikia.nocookie.net/mkwikia/images/b/b6/Scorpion_MK11_3.png/revision/latest/scale-to-width-down/350?cb=20190405144918";
const Scorpion = new Fighter("SCORPION","Hanzo Hasashi", "Netherrealm", "Toasty", false, imgSC);
const SubZero = new Fighter("SUB-ZERO","Kuai Liang", "Earthrealm", "Spine Rip", true, imgSZ);
console.table(Scorpion);
console.table(SubZero);

/*for (let element in Scorpion) {
    console.log(element);
    console.log(Scorpion[element]);
}
comentado para no congestionar tanto el código
*/

function Elegir(){
    let chooseSC = false;
    let chooseSZ = false;
    let text = "";
    chooseSC = confirm("¿Eliges a Scorpion?")
    switch (chooseSC) {
    case true: 
    text = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${Scorpion.img} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${Scorpion.alias}</h5>
      <p class="card-text"> Elegiste a ${Scorpion.name}, habitante del ${Scorpion.realm} y que su fatality es ${Scorpion.fatality}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>)`;
  Scorpion.choose()
    break;
    case false:
    text = `<div class="card" style="width: 18rem;">
   <img class="card-img-top" src=${SubZero.img} alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${SubZero.alias}</h5>
     <p class="card-text"> Elegiste a ${SubZero.name}, habitante del ${SubZero.realm} y que su fatality es ${Scorpion.fatality}</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
 </div>`;
 SubZero.choose()
     break;
     
    }
    return text
}

const card = Elegir()
document.write(card)

