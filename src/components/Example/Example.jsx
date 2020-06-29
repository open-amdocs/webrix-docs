import React, {useEffect, useState, useCallback, memo}  from 'react';
import cls from 'classnames';
import Highlighter from '../Highlighter';
import Controls from './components/Controls/Controls';
import Demo from './components/Demo/Demo';
import './Example.scss';

const Example = ({file}) => {
    const [code, setCode] = useState('');
    const [visible, setVisible] = useState('');
    const toggle = useCallback(() => setVisible(v => !v), [setVisible]);
    const id = file.replace(/\//g, '-').toLowerCase();

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!../../routes/Docs/content/${file}`);
            setCode(text.default.trim());
        })();
    }, []);

    return (
        <div className='code-example'>
            <div className='live-code'>
                <Demo id={id} file={file}/>
                <Controls code={code} id={id} toggle={toggle}/>
            </div>
            <div className={cls('source-code', {visible})}>
                <Highlighter code={code}/>
            </div>
        </div>
    )
}

export default memo(Example);