import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/app';
import CSV from './csv/csv-container';

import Home from './home/home';
import TeamSignIn from './team-signin/team-signin';
import AdminGame from './admin-game-display/admin-game-display';

export default  (
    <Route path='/' component={App}>
    	<IndexRoute component={Home} />
        <Route path="csv-upload" component={CSV} />
        <Route path="team" component={TeamSignIn} />
        <Route path="admin-game" component={AdminGame} />
    </Route>
);


