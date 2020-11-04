import React, {useState, useCallback, useRef, memo}  from 'react';
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
    const reset = useCallback(() => iframe.current.contentWindow.location.reload(), [iframe.current])

    return (
        <div className='code-example'>
            <div className='live-code' style={{height}}>
                <iframe src={`/examples/${file}`} ref={iframe}/>
                <Controls code={js} style={scss} toggle={toggle} reset={reset}/>
            </div>
            <div className={cls('source-code', {visible})}>
                <Highlighter code={js}/>
            </div>
        </div>
    );
}

export default memo(Example);