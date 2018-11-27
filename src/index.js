// document.addEventListener('DOMContentLoaded', () => {
//   console.log(POKEMON)
//   //YOUR CODE HERE
// })

const API = 'http://localhost:3000/pokemon';
const pokeSearch = document.getElementById('pokemon-search-input');
const pokeSubmit = document.getElementById('pokemon-search-submit');
const pokeReset = document.getElementById('pokemon-search-reset');
const pokeTainer = document.getElementById('pokemon-container');

let pokArray = []

fetch(API)
  .then((resp) => resp.json())
  .then(function(data) {
    pokArray = data
    render(pokArray)
  })

  
pokeSubmit.addEventListener('click', function(e) {
  e.preventDefault()
  let newPokArray = pokArray.filter(function(pokemon){
    return pokemon.name.includes(pokeSearch.value)
  })
  render(newPokArray)
})

pokeReset.addEventListener('click', function(){
  render(pokArray)
})

function render(renderArray) {  
  pokeTainer.innerHTML = ''
  if (renderArray.length != 0){
    renderArray.forEach(function(pokemon){
      let pokemonItem = 
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
      // let pokeImg = document.querySelector('.toggle-sprite')
      // pokeImg.addEventListener('click',function(e){
      //   if (e.target.src === pokemon.sprites.front){
      //     e.target.src = pokemon.sprites.back
      //   } else {
      //     e.target.src = pokemon.sprites.front
      //   }
      // })
    })
  } else {
    pokemonItem = "<p><center>There are no Pokémon here</center></p>"
    pokeTainer.insertAdjacentHTML('beforeend', pokemonItem)
  }
}

// shamelessly stolen from demo page
document.getElementById('pokemon-container').addEventListener('click', event => {
  if (event.target.dataset.action === 'flip') {
    const targetPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)
    if (event.target.src === targetPoke.sprites.front) {
      event.target.src = targetPoke.sprites.back
    } else {
      event.target.src = targetPoke.sprites.front
    }
  }
})

function capitalizer(name){
  initial = name[0].toUpperCase()
  return initial + name.slice(1)
}
