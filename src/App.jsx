import React from 'react';
import Router from './routes/Router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Frame from './routes/Frame/Frame';
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
