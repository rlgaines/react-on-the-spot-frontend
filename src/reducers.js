import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// import HomeReducer from './home/home_reducer'

const rootReducer = combineReducers({

    form: formReducer

});

export default rootReducer;

