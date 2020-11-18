import React from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import routes from './Examples.routes';
import './Examples.scss';

const Examples = () => {
    const {pathname} = useLocation();
    return (
        <>
            <Sidebar/>
            <iframe src={`/frame/examples/${pathname.split('/')[2]}/index`}/>
            <Route exact path='/examples'>
                <Redirect to={routes[0].path} />
            </Route>
        </>
    );
}

export default Examples;