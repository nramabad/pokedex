import $ from 'jquery'

export const fetchAllPokemon = () => (
  $.ajax ({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  })
);

export const fetchOnePokemon = pokemon => (
  $.ajax ({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  })
);

export const fetchOneSpecies = pokemon => (
  $.ajax({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
  })
)

export const fetchAllTypes = () => (
  $.ajax({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/type?limit=18'
  })
)

export const fetchOneType = type => (
  $.ajax({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/type/${type}/`
  })
)