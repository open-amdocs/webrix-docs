import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ROUTES from './Router.routes.js';

const Router = () => (
    <Switch>
        {ROUTES.map(({path, name, component: Comp}) => (
            <Route path={path} key={path}>
                <div id={`route-${name}`} className='route-container'>
                    <Comp/>
                </div>
            </Route>
        ))}
    </Switch>
);

export default Router;