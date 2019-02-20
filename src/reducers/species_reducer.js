import { RECEIVE_ONE_SPECIES } from '../actions/pokemon_actions';

const speciesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ONE_SPECIES:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};


export default speciesReducer;

