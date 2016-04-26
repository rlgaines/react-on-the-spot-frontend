import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/app';
import CSV from './csv/csv-container';


import Home from './home/home';
import TeamSignIn from './team-signin/team-signin';
import TeamDisplay from './team-display/team-display';
import AdminGame from './admin-game-display/admin-game-display';
import GameBoard from './admin-game-display/board/board';
import GameSetup from './admin-game-display/setup/setup';
import GameAnswers from './admin-game-display/answers/answers';


export default  (
    <Route path='/' component={App}>
    	<IndexRoute component={Home} />
        <Route path="csv-upload" component={CSV} />
        <Route path="team-signin" component={TeamSignIn} />
        <Route path="team-display" component={TeamDisplay} />
        <Route path="admin-game" component={AdminGame} >
            <Route path="select" component={GameBoard} />
            <Route path="setup" component={GameSetup} />
            <Route path="answers" component={GameAnswers} />
        </Route>
    </Route>
);


