import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Scrollable} from 'webrix/components';
import {Header, Footer} from 'components';
import Router from './routes/Router';
import Frame from './routes/Frame/Frame';
import './App.scss';

const Main = () => (
    <>
        <Header/>
        <Scrollable>
            <Router/>
            <Footer/>
        </Scrollable>
    </>
)

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/frame'>
                <Frame/>
            </Route>
            <Route path='/'>
                <Main/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App;
