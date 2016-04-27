import axios from 'axios';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

const ROOT_URL = 'http://localhost:5000/';


export function fetchQuestions() {
    const request = axios.get(`${ROOT_URL}1/ questions`)
    return {
        type: FETCH_QUESTIONS,
        payload: request
    };
}