let imgBB = "https://static.wikia.nocookie.net/metalgear/images/d/dd/MGS4BigBossPP.png/revision/latest/scale-to-width-down/1000?cb=20160723001517&path-prefix=es"
let imgVS = "https://static.wikia.nocookie.net/metalgear/images/9/99/Venom_Snake_TTP.png/revision/latest/scale-to-width-down/900?cb=20160927033237&path-prefix=es"

class Protagonist {
  constructor(name, img, alias) {
    this.name = name;
    this.img = img;
    this.alias = alias;
    }
  }

  class Antagonistas {
    constructor(name, img, alias) {
      this.name = name;
      this.img = img;
      this.alias = alias;
      }
    }
  

let arr_protagonists = [
  {name: "Jack", img: imgBB, alias: "Big Boss"},
  {name: "Ahab", img: imgVS, alias: "Venom Snake"},
];

let imgRO = "https://static.wikia.nocookie.net/metalgear/images/e/e7/MGS4OcelotPP.png/revision/latest/scale-to-width-down/603?cb=20160723005658&path-prefix=es";
let imgPM = "https://static.wikia.nocookie.net/metalgear/images/3/39/MGS4MantisPP.png/revision/latest/scale-to-width-down/634?cb=20131220102619"
let arr_antagonists= [
{name: "Adamsk", img: imgRO, alias: "Revolver Ocelot"},
{name: "Unknown", img: imgPM, alias: "Psycho Mantis"},
];


function makeProtagonists(arr_protagonists) {
let arr_protagonist_objects = []
arr_protagonists.forEach(element => {
    var p = new Protagonist(element.name, element.img, element.alias)
    arr_protagonist_objects.push(p)
  });
  return arr_protagonist_objects
}

function makeAntagonists(arr_antagonists) {
  let arr_antagonist_objects = []
  arr_antagonists.forEach(element => {
      var p = new Protagonist(element.name, element.img, element.alias)
      arr_antagonist_objects.push(p)
    });
    return arr_antagonist_objects
  }

let protagonist_objects = makeProtagonists(arr_protagonists);
let antagonist_objects = makeAntagonists(arr_antagonists);




function print_protagonist(protagonist_objects) {
  const cards_row = document.querySelector("#main")
  protagonist_objects.forEach(element => {
    let container = document.createElement("div");
    container.classList.add("col-4");
    let container_title = document.createElement("h2");
    container_title.textContent = "Protagonista"
    let card_frame = document.createElement("card");
    card_frame.classList.add("card");
    let card_body = document.createElement("card-body")
    card_body.classList.add("card-body")
    let card_title = document.createElement("h5");
    card_title.textContent = element.alias
    let card_img = document.createElement('img');
    card_img.src = element.img;

    let button = document.createElement('button')
    button.innerHTML = "Choose me";
    button.onclick = meactivo;
    card_body.append(card_title)
    card_body.append(card_img)
    card_body.append(button)
   
    card_frame.appendChild(container_title);
    card_frame.appendChild(card_body);
    container.appendChild(card_frame);
    cards_row.appendChild(container);

  });
  
}

function print_antagonist(antagonist_objects) {
  const cards_row = document.querySelector("#main2")
  antagonist_objects.forEach(element => {
    let container = document.createElement("div");
    container.classList.add("col-4");
    let container_title = document.createElement("h2");
    container_title.textContent = "Antagonista"
    let card_frame = document.createElement("card");
    card_frame.classList.add("card");
    let card_body = document.createElement("card-body")
    card_body.classList.add("card-body")
    let card_title = document.createElement("h5");
    card_title.textContent = element.alias
    let card_img = document.createElement('img');
    card_img.src = element.img;

    card_body.append(card_title)
    card_body.append(card_img)

   
    card_frame.appendChild(container_title);
    card_frame.appendChild(card_body);
    container.appendChild(card_frame);
    cards_row.appendChild(container);

    
  });
  
}


print_protagonist(protagonist_objects)
print_antagonist(antagonist_objects)


function meactivo(){
  alert("funciono")
}