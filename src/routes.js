import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/app';
import CSV from './csv/csv-container';
import Home from './home/home';
import TeamDisplay from './team-display/team-display';
import TeamSignIn from './team-signin/team-signin';

export default  (
    <Route path='/' component={App}>
    	<IndexRoute component={Home} />
        <Route path="csv-upload" component={CSV} />
        <Route path="team-display" component={TeamDisplay} />
        <Route path="team" component={TeamSignIn} />

    </Route>
);


