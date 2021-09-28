const firstcol = document.querySelector("#col1")
const secondcol = document.querySelector("#col2")
const thirdcol = document.querySelector("#col3")
let racers = [];
let Pierimg = "https://static.wikia.nocookie.net/warnerbros/images/2/29/Pierre.gif/revision/latest/scale-to-width-down/218?cb=20120904135913&path-prefix=es";
let Pier = new Racer("Pierre Nodoyuna", "El Súper Ferrari", Pierimg);

let Piedroimg = "https://static.wikia.nocookie.net/warnerbros/images/9/91/Autos-locos.jpg/revision/latest/scale-to-width-down/245?cb=20121231114158&path-prefix=es";

let Piedro = new Racer("Piedro", "El Rocomóvil,", Piedroimg);
let Tenebrososimg = "https://static.wikia.nocookie.net/wackyraces/images/6/6d/Wr_gruesome.jpg/revision/latest/scale-to-width-down/944?cb=20180526195807";

let Tenebrosos = new Racer("Los Tenebrosos ", "El Espantomóvil", Tenebrososimg);

racers.push(Pier, Piedro, Tenebrosos)



function guessCartoon(){
let guess = prompt("¿Cual es el dibujo de carreras favorito de Adrian?")
let wackyracer = document.createElement("img")




wackyracer.setAttribute(
"src",
"https://cmon-files.s3.amazonaws.com/images/product/avatar/170/WR-avatar.jpg"

)

if (guess === "Autos Locos" || guess === "Autos locos" || guess === "autos locos" ){
firstcol.appendChild(wackyracer);
showCharacters(racers)

}
}
guessCartoon(racers)

function Racer(name, car, img) {
    this.name = name;
    this.car = car;
    this.img = img;
  }



console.log(racers)

function showCharacters(racers){
debugger
    racers.forEach(element => {
        let cardiv = document.createElement('div')
        let card = document.createElement('div');
        let racer = element
        card.innerHTML = `el es ${racer.name}, maneja el ${racer.car} y se ve asi <img src=${racer.img}>` 
    
        secondcol.appendChild(cardiv)
        cardiv.appendChild(card)
        
    });
}