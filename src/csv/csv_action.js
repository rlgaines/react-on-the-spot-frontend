//this is where the actions for this component will take place, such as calling to the API to get the info we need.
import axios from 'axios';

export const POST_QUESTIONS = 'POST_QUESTIONS';

//Game id needs to be provided by the user token
var gameID = localStorage.getItem('game_id');

//This function posts the uploaded file to the db
export function post(props) {

    gameID = localStorage.getItem('game_id');

    // The same format a form would use if the encoding type were set to "multipart/form-data".
    var data = new FormData();
    data.append('file', props.fields.file.value[0]);
    data.append('game_id', gameID);

    const request = axios.post("http://localhost:3000/file", data);

    return {
        type: POST_QUESTIONS,
        payload: request
    };
}

