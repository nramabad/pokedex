import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import speciesReducer from './species_reducer';
import onePokeReducer from './one_poke_reducer';
import typesReducer from './types_reducer'

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer,
    onepoke: onePokeReducer,
    species: speciesReducer,
    types: typesReducer
});

export default entitiesReducer;