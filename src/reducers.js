import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionsReducer from './reducers/reducer_questions';

// import HomeReducer from './home/home_reducer'

const rootReducer = combineReducers({

    // form: formReducer
    categoriesAndQuestions: QuestionsReducer

});

export default rootReducer;
