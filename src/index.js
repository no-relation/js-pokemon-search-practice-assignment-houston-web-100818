// document.addEventListener('DOMContentLoaded', () => {
//   console.log(POKEMON)
//   //YOUR CODE HERE
// })

const API = 'http://localhost:3000/pokemon';
const pokeSearch = document.getElementById('pokemon-search-input');
const pokeSubmit = document.getElementById('pokemon-search-submit');
const pokeTainer = document.getElementById('pokemon-container');

let pokArray = []

fetch(API)
  .then((resp) => resp.json())
  .then(function(data) {
    pokArray = data
    render(pokArray)
  })

pokeSubmit.addEventListener('click', function() {
  render(pokArray)
})

function render(pokArray) {  
  pokArray.forEach(function(pokemon){
    pokemonItem = 
    `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${capitalizer(pokemon.name)}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
    pokeTainer.insertAdjacentHTML('beforeend', pokemonItem)
  })
}

function capitalizer(name){
  initial = name[0].toUpperCase()
  return initial + name.slice(1)
}
