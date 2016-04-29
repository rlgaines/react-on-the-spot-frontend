import axios from 'axios';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const CREATE_GAME = 'CREATE_GAME';
export const CREATE_TEAM = 'CREATE_TEAM';
export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';


const ROOT_URL = 'http://localhost:5000';


export function fetchQuestions() {
    const request = axios.get(`${ROOT_URL}/1/questions2`)

    return {
      type: FETCH_QUESTIONS,
      payload: request
    }
}

export function fetchTeams() {
    const request = axios.get(`${ROOT_URL}/1/users`)

    return {
      type: FETCH_TEAMS,
      payload: request
    }
}

export function createGame(props) {
    const request = axios.post(`${ROOT_URL}/games`, props);

    return {
        type: CREATE_GAME,
        payload: request
    }
}

export function createTeam(props) {
    const request = axios.post(`${ROOT_URL}/users`, props);

    return {
        type: CREATE_TEAM,
        payload: request
    }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
