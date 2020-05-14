import React from 'react';
import Router from './routes/Router';
import {BrowserRouter} from "react-router-dom";
import {Header} from './components';
// import './App.scss';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Router/>
    </BrowserRouter>
)

export default App;
