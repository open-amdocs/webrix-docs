import React, {useEffect, useState} from 'react';
import {Route, Redirect, useLocation} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Source from './components/Source/Source';
import Controls from './components/Controls/Controls';
import routes from './Examples.routes';
import './Examples.scss';

const Examples = () => {
    const {pathname} = useLocation();
    const dir = pathname.split('/')[2];
    const [content, setContent] = useState('run');

    useEffect(() => {
        setContent('run');
    }, [dir]);

    return (
        <>
            <Sidebar/>
            <div className='iframe-container'>
                <Controls dir={dir} content={content} onContentChange={setContent}/>
                {content !== 'run' && <Source ext={content}/>}
                {content === 'run' && <iframe src={`/frame/examples/${dir}/index`}/>}
            </div>
            <Route exact path='/examples'>
                <Redirect to={routes[0].path} />
            </Route>
        </>
    );
}

export default Examples;