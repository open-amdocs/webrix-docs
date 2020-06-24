import React from 'react';
import {Container} from '../../components';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import './Docs.scss';



const Docs = () => {
    return (
        <Container>
            <Sidebar/>
            <Content/>
        </Container>
    )
};

export default Docs;