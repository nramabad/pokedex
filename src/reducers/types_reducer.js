import { RECEIVE_ONE_TYPE, RECEIVE_ALL_TYPES } from '../actions/pokemon_actions';

const typesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_TYPES:
            return Object.assign({}, action.types.results);
        case RECEIVE_ONE_TYPE:
            let newState = Object.assign({}, state);
            newState[action.payload.id - 1] = action.payload;
            return newState;
        default:
            return state;
    }
};


export default typesReducer;
