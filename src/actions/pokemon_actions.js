import * as APIUtil from '../util/api_util';

export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_SPECIES = 'RECEIVE_ONE_SPECIES';
export const RECEIVE_ALL_TYPES = 'RECEIVE_ALL_TYPES';
export const RECEIVE_ONE_TYPE = 'RECEIVE_ONE_TYPE';

export const receiveOnePokemon = payload => ({
  type: RECEIVE_ONE_POKEMON,
  payload
});

export const requestOnePokemon = pokemon => dispatch => {
  return APIUtil.fetchOnePokemon(pokemon)
    .then(payload => dispatch(receiveOnePokemon(payload)));
};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const receiveOneSpecies = payload => ({
  type: RECEIVE_ONE_SPECIES,
  payload
});

export const requestOneSpecies = habitat => dispatch => {
  return APIUtil.fetchOneSpecies(habitat)
    .then(payload => dispatch(receiveOneSpecies(payload)));
}

export const receiveOneType = payload => ({
  type: RECEIVE_ONE_TYPE,
  payload
});

export const requestOneType = name => dispatch => {
  return APIUtil.fetchOneType(name)
    .then(payload => dispatch(receiveOneType(payload)));
};

export const receiveAllTypes = types => ({
  type: RECEIVE_ALL_TYPES,
  types
});

export const requestAllTypes = () => dispatch => {
  return APIUtil.fetchAllTypes()
    .then(types => dispatch(receiveAllTypes(types)));
};
