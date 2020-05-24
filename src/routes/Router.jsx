import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ROUTES from './Router.routes.js';
import './Router.scss';

const Router = () => (
    <Switch>
        {ROUTES.map(({path, name, component: Comp}) => (
            <Route path={path} key={path}>
                <div id={`route-${name}`} className='route'>
                    <Comp/>
                </div>
            </Route>
        ))}
    </Switch>
);

export default Router;