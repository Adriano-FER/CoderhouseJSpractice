const getPokemon = async (id) => {
const respuesta = await fetch(`https://pokemonapi.co/api/v2/pokemon/${id}`)
console.log("getPokemon" + respuesta)
const data = await Response.json()
console.log(data);
};

const init = async () =>{
    const firstPokemon = getPokemon(25);
    console.log("init" + firstPokemon);
};

document.addEventListener("DOMContentLoaded", init)