import React, {useCallback, useRef, useEffect, memo}  from 'react';
import {useVisibilityState} from 'webrix/hooks';
import cls from 'classnames';
import Highlighter from '../Highlighter';
import Controls from './components/Controls/Controls';
import {useCode} from './Example.hooks';
import './Example.scss';

const Example = ({file, height}) => {
    const {js, scss} = useCode(file);
    const {visible, toggle} = useVisibilityState();
    const iframe = useRef();
    const reset = useCallback(() => iframe.current.contentWindow.location.reload(), []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !iframe.current.src) {
                iframe.current.src = `/frame/${file}`;
                observer.disconnect();
            }
        }, {
            rootMargin: '-60px 0px 0px 0px',
            root: document.getElementById('app'),
            threshold: 0,
        });
        observer.observe(iframe.current);
        return () => observer.disconnect();
    }, [file]);

    return (
        <div className='code-example'>
            <div className='live-code' style={{height}}>
                <div className='shadow'/>
                <iframe ref={iframe}/>
                <Controls code={js} style={scss} toggle={toggle} reset={reset}/>
            </div>
            <div className={cls('source-code', {visible})}>
                <Highlighter code={js}/>
            </div>
        </div>
    );
}

export default memo(Example);