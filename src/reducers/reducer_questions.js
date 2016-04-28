import { FETCH_QUESTIONS } from '../actions';

const INITIAL_STATE = { data: [] };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_QUESTIONS:
      return {...state, data: action.payload.data }
    default:
      return state;
  }
}
