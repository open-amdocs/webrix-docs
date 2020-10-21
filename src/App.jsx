import React from 'react';
import Router from './routes/Router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Examples from './routes/Examples/Examples';
import {Header, Footer} from 'components';

const Main = () => (
    <>
        <Header/>
        <Router/>
        <Footer/>
    </>
)

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/examples'>
                <Examples/>
            </Route>
            <Route path='/'>
                <Main/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App;
