import axios from 'axios';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const CREATE_GAME = 'CREATE_GAME';

const ROOT_URL = 'http://localhost:5000';


export function fetchQuestions() {
    const request = axios.get(`${ROOT_URL}/1/ questions`)
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}

export function createGame(props) {
    const request = axios.post(`${ROOT_URL}/games`, props);

    return {
        type: CREATE_GAME,
        payload: request
    }
}