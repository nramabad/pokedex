import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const onePokeReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ONE_POKEMON:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};

export default onePokeReducer;