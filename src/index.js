// document.addEventListener('DOMContentLoaded', () => {
//   console.log(POKEMON)
//   //YOUR CODE HERE
// })

const API = 'http://localhost:3000/pokemon';
const pokeSearch = document.getElementById('pokemon-search-input');
const pokeSubmit = document.getElementById('pokemon-search-submit');
const pokeTainer = document.getElementById('pokemon-container');

fetch(API)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("this is data ", data)
  })

// console.log("this is pokesubmit", pokeSubmit)

pokeSearch.addEventListener('keydown', function(e){

  console.log(e.which)  
})
console.log("this is pokesubmit", pokeSubmit)