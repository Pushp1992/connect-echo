import React from 'react';
import { Jobs, Team, NotFound } from './components/component';
import {Route, Switch} from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Jobs} />
                <Route path="/team-members" component={Team} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}