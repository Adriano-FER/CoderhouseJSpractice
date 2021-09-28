$(document).ready(function () {





  // Aquí se crean los arrays donde se van a guardar los personajes, tanto disponibles, como él elegido.
  let choosed_fighter = [];
  let available_fighter = [];
  // se trae la data del Json, tal como si fuera un API.
  let json = "./characters.json";
  fetch(json)
    .then(response => response.json())
    .then(data => available_fighter = data.characters)
  console.log(available_fighter)
  
  let selectedCardFighter = null

  //este código era como creaba los luchadores, antes de utilizar el JSON.
  /* class Fighter {
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
     defense: 30,
     attack: 40,
   });
   const Kitana = new Fighter(2, "KITANA", "Kitana Kahn", "Outworld", "Kiss of Death", true, imgKT, {
     hitpoints: 50,
     defense: 30,
     attack: 50
   });
   */
  //no borre este código, para que demosstrar uqe se hacerlo también por el medio regular y sin usar fetch.
  //const count = available_fighter.push(Scorpion, SubZero, Kitana)


  document.body.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      this.querySelector("#enter").remove()
      Start_menu()
    }
  });
  // Aquí es donde comienza todo por medio de la tecla START.


  //Estas son funciones reutilizables para crear elementos del DOM,
  function generateElement(parent, type) {
    if (typeof parent === 'string') {
      parent = document.querySelector(parent)
    }

    let element = document.createElement(type)
    return parent.appendChild(element)

  }
  //para agregarle clase a estos elementos,
  function addClasstoElement(item, classtoAdd) {
    const isArray = Array.isArray(classtoAdd)
    if (isArray) {
      classtoAdd.forEach(element => {
        item.classList.add(element)
      });
      return
    }

    item.classList.add(classtoAdd)
  }
  // o para agregarle atributos
  function addAttributetoElement(item, setAttribute) {
    const isArray = Array.isArray(setAttribute)
    if (isArray) {
      setAttribute.forEach(element => {

        if (element.operation === "attribute") {
          item.setAttribute(element.key, element.value)
        }
        if (element.operation === "innerHTML") {
          item[element.operation] = element.value
        }


      });
      return
    }

    function cardCreate(){

    }
  }
  //Este es el puntapie inicial de la AP, donde se genera todo el DOM, una vez pulsado START.
  function Start_menu() {
    const cards_row = document.querySelector("#main")
    available_fighter.forEach(element => {
      cards_row
      let container = generateElement("#main", "div")
      container.classList.add("col-4");
      let card_frame = generateElement(container, "card")
      addClasstoElement(card_frame, ["card", "fade-in"])
      let card_body = generateElement(card_frame, "card-body")
      addClasstoElement(card_body, "card-body")
      let card_title = generateElement(card_body, "h5")
      card_title.textContent = element.alias
      let card_img = generateElement(card_body, "img")
      card_img.src = element.img;
      let card_text = generateElement(card_body, "p")
      card_text.classList.add("p");
      card_text.textContent = `
      ${element.name}, habitante del ${element.realm} y su fatality es ${element.fatality}`
      let choosebtn = generateElement(card_body, "button")
      const att = [{
          operation: "attribute",
          key: "id",
          value: `btn${element.id}`
        },
        {
          operation: "attribute",
          key: "data-id",
          value: element.id
        },
        {
          operation: "attribute",
          key: "data-select",
          value: false
        },
        {
          operation: "innerHTML",
          key: null,
          value: "Choose me"
        }
      ]
      addAttributetoElement(choosebtn, att)
      addClasstoElement(choosebtn, "actionbutton")

      //generamos las cartas





    });
    //callback a la función que nos deja elegir personajes.
    choosing()

  }
  function buttonEventL(id){
    id.forEach(element => {
      let btn = document.querySelector(element)
    btn.addEventListener("click", choose)
    });
    
  }
//la función que nos deja elegir personajes, y detecta cual elegimos.
  function choosing() {
    buttonEventL(["#btn0","#btn1","#btn2"]);

    
    /* codigo obsoleto y mejorado
    let btn0 = document.querySelector("#btn0")
    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")

    btn0.addEventListener("click", choose)
    btn1.addEventListener("click", choose)
    btn2.addEventListener("click", choose)
    */
  }


  function choose(e) {
    //una vez elegido se ejecuta esta función, y determina cual elegimos, lo guarda y genera sonidos.
    var aud = document.getElementById("Versus");
    aud.volume = 0.2;
    aud.play()
    const elemento = e.target;
    const myid = elemento.getAttribute("data-id");
    choosed_fighter.push(available_fighter[myid]), choose = true
    const myfighterJson = JSON.stringify(available_fighter[myid]);
    localStorage.setItem("MySavedFighter", myfighterJson)
    elemento.setAttribute("data-select", true)
    const otherelements = document.querySelectorAll("[data-select = false]")
  

// distinguimos los no elegidos, les agregamos un efecto yl os borramos.
    otherelements.forEach(element => {
      const padre = element.parentElement;
      const abuelo = padre.parentElement;
      abuelo.classList.add("fade-out");
    });


    setTimeout(() => {
// callback a la siguiente función, ya habiendo elegido, con un timeout asi da tiempo para la animación.
      return yaelegido(otherelements, elemento, e)
    }, 3000);

  }

  //function otraforma(){

  //}



  function yaelegido(arrelements, selectedFighter, e) {


//aquí los borramos definitivamente a los no elegidos, y le damos una ID al elegido

    let bisabueloFighter = selectedFighter.parentElement.parentElement.parentElement
    let addmetheID = selectedFighter.parentElement
    addmetheID.id = "myfighter";
    selectedCardFighter = selectedFighter.parentElement.parentElement

    arrelements.forEach(element => {
      const padre = element.parentElement;
      const abuelo = padre.parentElement;
      const bisabuelo = abuelo.parentElement;
      bisabuelo.remove()
    });
//animación para acomodarse al nuevo número de elementos (cartas)
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
      e.target.remove()
      return iniciarpelea(available_fighter, choosed_fighter)
//llamamos la siguiente función y borramos el botón.
    }, 3000);

  }


//Se inicia la pelea, y se crea todo el dom de la pelea.
  function iniciarpelea(available_fighter, choosed_fighter) {

    resultado = pelear(available_fighter, choosed_fighter)

  }

  function VisualsforFight(opponent) {
    //las visuales para la pelea (crea al rival)
    let myCardfighter = document.querySelector(".col-4")
    myCardfighter.classList.remove("slide-left");
    myCardfighter.classList.remove("slide-right");
    myCardfighter.classList.remove("offset-8");

    addClasstoElement(myCardfighter, ["offset-4", "slide-left"]);
    let container = generateElement("#main", "div")
    container.classList.add("col-4");
    let card_frame = generateElement(container, "card")
    addClasstoElement(card_frame, ["card", "fade-in"])
    let card_body = generateElement(card_frame, "card-body")
    addClasstoElement(card_body, "card-body")
    let card_title = generateElement(card_body, "h5")
    card_title.textContent = opponent.alias
    let card_img = generateElement(card_body, "img")
    card_img.src = opponent.img;
    container.id = "opponent";


  }

  function victoryCounter() {
    let hishealthrow = document.querySelector("#hishealthbar")
    let myhealthrow = document.querySelector("#myhealthbar")
    let Mycounter = generateElement(myhealthrow, "div")
    let Hiscounter = generateElement(hishealthrow, "div")
    let Mysicon = generateElement(Mycounter, "span")
    Mysicon.id = "Mine";
    let Hisicon = generateElement(Hiscounter, "span")
    Hisicon.id = "His";
  }


  function pelear(available_fighter, choosed_fighter) {
   //animación de pelea y se crea la barra de vida
    $('col-4').animate({
      bottom: '-=120'
    }, 1000);
    let texto = document.querySelector("p")
    texto.classList.add("fade-out");
    let injured_fighter = null
    let opponent = [];
    opponent = available_fighter
    let myfighter = choosed_fighter[0]
    opponent = opponent.filter(obj => obj.alias !== myfighter.alias)
    opponent = opponent[Math.floor(opponent.length * Math.random())]
    document.querySelector(".alert").textContent = `${myfighter.alias} VS ${opponent.alias}`
//aquí se general la carta del rival
    VisualsforFight(opponent)

    let audiovs = new Audio('extras/Versus.mp3');
    audiovs.volume = 0.2;
    audiovs.play()
    let audiofight = new Audio('extras/Fight!.mp3');
    let col1 = generateElement("#healthrow", "div")
    let col2 = generateElement("#healthrow", "div")
    addClasstoElement(col1, ["col-6"]);
    addClasstoElement(col2, ["col-6"]);
    col1.id = "myhealthbar";
    col2.id = "hishealthbar";
    let myprogressbox = generateElement(col1, "div");
    let myprogress = generateElement(myprogressbox, "div");

    addClasstoElement(myprogressbox, ["progress", "fade-in"]);
    addClasstoElement(myprogress, ["progress-bar", "fade-in", "text-left"]);
    let spanMy = generateElement(myprogress, "span")
    spanMy.style.width = "10vh"
    spanMy.innerText = myfighter.alias

    let mypro = [{
        operation: "aria-valuenow",
        key: null,
        value: myfighter.stadistics.hitpoints
      },
      {
        operation: "aria-valuemax",
        key: null,
        value: myfighter.stadistics.hitpoints
      },
      {
        operation: "aria-valuemin",
        key: null,
        value: "0"
      }
    ]

    addAttributetoElement(myprogress, mypro)
    let opprogressbox = generateElement(col2, "div");
    let opprogress = generateElement(opprogressbox, "div");
    let spanOp = generateElement(opprogress, "span")
    spanOp.style.width = "10vh"
    spanOp.innerText = opponent.alias
    addClasstoElement(opprogressbox, ["progress", "fade-in"]);
    addClasstoElement(opprogress, ["progress-bar", "fade-in"]);
    addAttributetoElement(opprogress, "oph");
    let oppro = [{
        operation: "aria-valuenow",
        key: null,
        value: opponent.stadistics.hitpoints
      },
      {
        operation: "aria-valuemax",
        key: null,
        value: opponent.stadistics.hitpoints
      },
      {
        operation: "aria-valuemin",
        key: null,
        value: "0"
      }
    ]
    addAttributetoElement(opprogress, oppro)
    opprogress.style.width = "100%";
    spanOp.className += "text-right"
    myprogress.style.width = "100%";
    spanMy.className += "text-right"
    victoryCounter()
    let myfighterMaxHp = myfighter.stadistics.hitpoints
    let opfighterMaxHp = opponent.stadistics.hitpoints

    setTimeout(() => {
      texto.textContent = ""
      audiofight.volume = 0.2;
      audiofight.play()
      let actionbutton = $("<button></button>", {
        id: "attackbtn"
      }).text("Attack");
      let aud = document.getElementById("TheSubway");
      aud.volume = 0.2;
      aud.play()
      musicStop(aud);
      $("#myfighter").append(actionbutton);

      let IwinRound = 0
      let HewinRound = 0
      actionbutton.click(function (e) {
//al pulsar el botón se golpea, y se calcula quien gana, es al mejor de 3.
        function threeRounds() {

          let sum = whoAttacks()

          /*if (sum > 0) {
            IwinRound += sum
            let Mysicon = document.querySelector("#Mine")
            let icon = generateElement(Mysicon, "i");
            icon.innerHTML = '<i class="fas fa-skull"></i>'
          }
          if (sum < 0) {
            HewinRound += sum
            let hisicon = document.querySelector("#His")
            let evilicon = generateElement(hisicon, "i");
            evilicon.innerHTML = '<i class="fas fa-skull"></i>'
          } */ //código obsoleto, mejorado
          let who = null
          if (sum > 0 ) {
            who = "#Mine";
            IwinRound += sum};
          if (sum < 0){
            who = "#His";
            HewinRound += sum }

            let hisicon = document.querySelector(who)
            let evilicon = generateElement(hisicon, "i");
            evilicon.innerHTML = '<i class="fas fa-skull"></i>'

            //código reciclado y mejorado a una función.
            let makeVictory = (worf) =>{
              let FightSave = JSON.stringify(`${worf} battle against ${opponent.alias}`);
              localStorage.setItem(`${worf}`, FightSave)
              $("#attackbtn").hide();
  
            }
          
          if (IwinRound >= 2) {
            makeVictory("won")
            /*let wonFightSave = JSON.stringify(`won battle against ${opponent.alias}`);
            localStorage.setItem("Won Fight", wonFightSave);
            $("#attackbtn").hide();
*/
            return victoriousPose(selectedCardFighter, myfighter.alias, injured_fighter, opponent, true)
          };

          if (HewinRound <= -2) {
            makeVictory("lost") /*
            let lostFightSave = JSON.stringify(`lost battle against ${opponent.alias}`);
            localStorage.setItem("lost Fight", lostFightSave);
            $("#attackbtn").hide();
            */
            let opponentCard = document.querySelector("#opponent")

            return victoriousPose(opponentCard, opponent.alias, injured_fighter, opponent, false)
          }


        }

        threeRounds()

      })

    }, 2000);
//se decide quien ataca por medio de un tiro de dado
    function whoAttacks() {
      let dice = Math.floor(Math.random() * 10);
      let whowon = 0
      if (dice >= 5) {


        whowon = opponentAttack()

      } else {

        whowon = myFighterAttack()

      }
      return whowon
    }
    // soy consciente de que esta parte del código podría ser optimizada, al no citarse tanto 2 veces.
    function opponentAttack() {
      const resultado = calcularDaño(opponent.stadistics, myfighter.stadistics);
      //se calcula el daño dependiendo quien golpee, y se modifica la barra de vida.
      myfighter.stadistics.hitpoints += resultado;
      myfighter.alive = myfighter.stadistics.hitpoints > 0 ? true : false;
      let porcentaje = (myfighter.stadistics.hitpoints / myfighterMaxHp) * 100;
      if (porcentaje < 0) {
        porcentaje = 0
      }
      myprogress.style.width = `${porcentaje}%`;
      injured_fighter = myfighter;
      document.querySelector(".alert").textContent = `${opponent.alias} Strikes!`
      if (myfighter.alive === false) {

        document.querySelector(".alert").textContent = `${opponent.alias} Wins Round!`
        myfighter.stadistics.hitpoints = myfighterMaxHp;
        opponent.stadistics.hitpoints = opfighterMaxHp;
        myprogress.style.width = `${100}%`;
        opprogress.style.width = `${100}%`;
        return -1

      }


    }

    function myFighterAttack() {
      const resultado = calcularDaño(myfighter.stadistics, opponent.stadistics);

      opponent.stadistics.hitpoints += resultado;
      let porcentajeop = (opponent.stadistics.hitpoints / opfighterMaxHp) * 100;
      if (porcentajeop < 0) {
        porcentajeop = 0
      }
      opprogress.style.width = `${porcentajeop}%`;
      opponent.alive = opponent.stadistics.hitpoints > 0 ? true : false;
      injured_fighter = opponent;
      document.querySelector(".alert").textContent = `${myfighter.alias} Strikes!`
      if (opponent.alive === false) {

        document.querySelector(".alert").textContent = `${myfighter.alias} Wins Round!`
        myfighter.stadistics.hitpoints = myfighterMaxHp;
        opponent.stadistics.hitpoints = opfighterMaxHp;
        myprogress.style.width = `${100}%`;
        opprogress.style.width = `${100}%`;
        return 1

      }

    }

  }

// animación final y se determina quien ganó, cambiandole su imagen.
  function victoriousPose(selectedCardFighter, winneralias, injured_fighter, opponent, won) {
    let imgtochange = selectedCardFighter.querySelector("img")
    let url = null
    let audiowin = null
    switch (winneralias) {
      case "SCORPION":
        url = "extras/Scorpion_vic.png"
        audiowin = new Audio('extras/ScorpionWins.mp3');
        break;
      case "SUB-ZERO":
        url = "extras/subzerowin.png"
        audiowin = new Audio('extras/Sub-ZeroWins.mp3');
        break;
      case "KITANA":
        audiowin = new Audio('extras/KitanaWins.mp3');
        url = "extras/kitanawins.png"
        break;
    }
    document.querySelector(".alert").textContent = `${winneralias} WINS! FLAWLESS VICTORY! `
    audiowin.play();
    imgtochange.src = url;
    if (won) {
      WONanimation()
    }
    if (!won) {
      Lostanimation()
    }

    endingMessage();
    return guardar_resultado(injured_fighter, available_fighter);
  }

  function calcularDaño(atacante, defensor) {
    const resultado = defensor.defense >= atacante.attack ? 0 : defensor.defense - atacante.attack;
    return resultado;
  }

// se guarda el resultado
  function guardar_resultado(resultado_final, available_fighter) {
    var foundIndex = available_fighter.findIndex(x => x.id === resultado_final.id);
    if (foundIndex === -1) {
      console.log("no se pudo encontrar, por lo tanto no se pudo guardar")
    }
    available_fighter[foundIndex] = resultado_final;
    console.log(available_fighter)

    console.log(getRecord())
    setTimeout(() => {
      endingMessage()
    }, 5000);
  }

//se trae el resultado y se ve el historial de peleas
  function getRecord() {
    const lostfight = JSON.parse(localStorage.getItem("LostFight"));
    const wonfight = JSON.parse(localStorage.getItem("WonFight"))
    return lostfight || wonfight ? {
      wonfight: wonfight,
      lostfight: lostfight
    } : console.log("couldn't find anything")
  }
//desaparece el rival, o mi personaje, dependiendo quien gano
  function WONanimation() {
    let enemy = document.querySelector("#opponent")
    let myfigh = document.querySelector("#myfighter")
    myfigh.classList.remove("slide-left");
    addClasstoElement(myfigh, "slide-right");
    addClasstoElement(enemy, ["slide-right", "fade-out"]);
    enemy.remove()
  }

  function Lostanimation() {
    let enemy = document.querySelector("#opponent")
    let myfigh = document.querySelector("#myfighter")
    addClasstoElement(enemy, "slide-left");
    addClasstoElement(myfigh, ["fade-out", "slide-left"]);
    myfigh.remove()
  }

  function endingMessage() {
//nos muestra que se terminó la pelea, y quita elementos de esta
    $("#healthrow").animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000);

    setTimeout(() => {

      $("#healthrow").remove()
      document.querySelector(".alert").textContent = `GAME OVER`
// a su vez nos permite reiniciar, al apretar start.
      setTimeout(() => {
        document.querySelector(".alert").textContent = `PRESS START TO CONTINUE`
        document.body.addEventListener("keypress", function (e) {
          if (e.key === 'Enter') {
            location.reload();
          }
        });
      }, 1000);
    }, 5000);

  };
//botón para quitar la música
  function musicStop(aud) {
    let mutebtn = document.createElement("button");
    mutebtn.innerHTML = "<i class='fas fa-volume-mute'></i>";
    document.body.appendChild(mutebtn);
    mutebtn.addEventListener("click", function (e) {
      aud.pause()
    });

  }

});