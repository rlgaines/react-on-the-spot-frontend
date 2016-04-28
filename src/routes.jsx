// import io from 'socket.io';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App/app';
import Home from './home/home';
import CSV from './csv/csv-container';
import TeamSignIn from './team-signin/team-signin';
import TeamDisplay from './team-display/team-display';
import AdminGame from './admin-game-display/admin-game-display';
import GameBoard from './admin-game-display/board/board';
import GameSetup from './admin-game-display/setup/setup';
import GameAnswers from './admin-game-display/answers/answers';
import SelectedQuestion from './admin-game-display/selectedQuestion/selectedQuestion';

// import http from './http';

export default  (
    <Route path='/' component={App}>
    	<IndexRoute component={Home} />
        <Route path="csv-upload" component={CSV} gameID={localStorage.getItem('game_id')} />
        <Route path=":gameID/team-signin" component={TeamSignIn} />
        <Route path="team-game" component={TeamDisplay} />

        <Route path="admin-game" component={AdminGame}>
            <Route path="select" component={GameBoard} />
            <Route path="selected-question" component={SelectedQuestion} />
            <Route path="answers" component={GameAnswers} />
        </Route>
    </Route>
);
// <Route path="ping" component={http} />
// <Route path="setup" component={GameSetup} />
