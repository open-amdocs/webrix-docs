import React from 'react';
import Router from './routes/Router';
import {BrowserRouter} from 'react-router-dom';
import {Header, Footer} from 'components';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
    </BrowserRouter>
)

export default App;
