$( document ).ready(function() {
  console.log( "ready!" );
 
$("#hiding").hide()
const url = "https://rickandmortyapi.com/api/character/"


$.ajax(url, { crossDomain: true}).done(function(data){
  let characters = data.results
  console.log(data)
    
  for (const character of characters) {
      let eachtr = document.createElement("tr")
      mesita.appendChild(eachtr)
      createTh(`${character.id}`, eachtr)
      createTh(`${character.name}`, eachtr)
      createTh(`${character.status}`, eachtr)
      createTh(`${character.species}`, eachtr)
      createTh(`${character.type}`, eachtr)
      createTh(`${character.location.name}`, eachtr)
  }

 

  $(".loader").hide()
  $("#hiding").show()
})





});

//Método de Christian
const createTh = (innerText, tr) => {
  
  let ath = document.createElement("th")
  ath.innerText = innerText
  tr.appendChild(ath)
}

function obtenerimagenesAPI(url){
  fetch(url)
  .then(respuesta = respuesta.json())
  .then(data => mostrarImagenes(data))
}

function mostrarImagenes(imagenes){

}