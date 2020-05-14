import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ROUTES from './Router.routes.js';

const Router = ({children}) => (
    <BrowserRouter>
        <Switch>
            {ROUTES.map(({path, name, component: Comp}) => (
                <Route path={path} key={path}>
                    <div id={`route-${name}`} className='route-container'>
                        <Comp/>
                    </div>
                </Route>
            ))}
        </Switch>
        {children}
    </BrowserRouter>
);

export default Router;