import React from 'react';
import {Scrollable} from 'webrix/components';
import Router from './routes/Router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Frame from './routes/Frame/Frame';
import {Header, Footer} from 'components';

const Main = () => (
    <Scrollable>
        <Header/>
        <Router/>
        <Footer/>
    </Scrollable>
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
