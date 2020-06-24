import React, {useEffect, useState}  from 'react';
import Highlighter from '../Highlighter';
import './Example.scss';

const Example = ({file}) => {
    const [code, setCode] = useState('');
    const Comp = React.lazy(() => import(`../../routes/Docs/content/${file}`));

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!../../routes/Docs/content/${file}`);
            setCode(text.default.trim());
        })();
    }, []);

    return (
        <div className='code-example'>
            <div className='live-code' id={file.replace(/\//g, '-').toLowerCase()}>
                <Comp/>
            </div>
            <div className='source-code'>
                <Highlighter code={code}/>
            </div>
        </div>
    )
}

export default Example;