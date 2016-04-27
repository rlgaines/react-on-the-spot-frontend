import { combineReducers } from 'redux';
import HomeReducer from './home/home_reducer'

const rootReducer = combineReducers({

    home: HomeReducer
});

export default rootReducer;

