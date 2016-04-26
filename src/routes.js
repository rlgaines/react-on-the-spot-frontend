import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/app';
import CSV from './csv/csv-container';


export default  (
    <Route path='/' component={App}>
        <Route path="csv-upload" component={CSV} />
    </Route>
);


