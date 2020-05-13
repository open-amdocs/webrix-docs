import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ROUTES from './Router.routes.js';

const Router = ({children}) => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({path, component: Comp}) => (
                <Route path={path}>
                    <Comp/>
                </Route>
            ))}
        </Switch>
        {children}
    </BrowserRouter>
);

export default Router;