import React, {useState, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from 'components';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {PageSectionContext} from './Docs.context';
import './Docs.scss';

const Docs = () => {
    const {hash} = useLocation();
    const [section, setSection] = useState(hash);
    return (
        <PageSectionContext.Provider value={useMemo(() => ({section, setSection}), [section, setSection])}>
            <Container>
                <Sidebar/>
                <Content/>
            </Container>
        </PageSectionContext.Provider>
    )
};

export default Docs;