import React, {useState, useCallback, useRef, useEffect, memo}  from 'react';
import cls from 'classnames';
import Highlighter from '../Highlighter';
import Controls from './components/Controls/Controls';
import {useCode} from './Example.hooks';
import './Example.scss';

const Example = ({file, height}) => {
    const {js, scss} = useCode(file);
    const [visible, setVisible] = useState('');
    const iframe = useRef();
    const toggle = useCallback(() => setVisible(v => !v), [setVisible]);
    const reset = useCallback(() => iframe.current.contentWindow.location.reload(), [iframe.current]);

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
    }, []);

    return (
        <div className='code-example'>
            <div className='live-code' style={{height}}>
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