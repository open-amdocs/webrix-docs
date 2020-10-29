import React, {useEffect, useState, useCallback, useRef, memo}  from 'react';
import cls from 'classnames';
import Highlighter from '../Highlighter';
import Controls from './components/Controls/Controls';
import './Example.scss';

const Example = ({file, height}) => {
    const [code, setCode] = useState('');
    const [style, setStyle] = useState('');
    const [visible, setVisible] = useState('');
    const iframe = useRef();
    const toggle = useCallback(() => setVisible(v => !v), [setVisible]);
    const reset = useCallback(() => iframe.current.contentWindow.location.reload(), [iframe.current]);
    const id = file.replace(/\//g, '-').toLowerCase();

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!../../routes/Docs/content/${file}`);
            const style = await import(`!raw-loader!../../routes/Docs/content/${file.substr(0, file.lastIndexOf('/'))}/style.scss`);
            setCode(text.default.trim());
            setStyle(style.default.trim());
        })();
    }, []);

    return (
        <div className='code-example'>
            <div className='live-code' style={{height}}>
                <iframe src={`/examples/${file}`} id={id} ref={iframe}/>
                <Controls code={code} style={style} toggle={toggle} reset={reset}/>
            </div>
            <div className={cls('source-code', {visible})}>
                <Highlighter code={code}/>
            </div>
        </div>
    )
}

export default memo(Example);