import FETCH_QUESTIONS from '../actions';

const INITAL_STATE = { questions: [] };

export default function(state = INITAL_STATE, action) {
    switch(action.type) {
        case FETCH_QUESTIONS:
            return { ...state, questions: action.payload.data };
        default:
            return state;
    }
}