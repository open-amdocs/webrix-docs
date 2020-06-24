import React, {useEffect, useState}  from 'react';
import Highlighter from '../Highlighter';

const Example = ({file}) => {
    const [code, setCode] = useState('');
    const Comp = React.lazy(() => import(`../../routes/Docs/content/${file}`));

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!../../routes/Docs/content/${file}`);
            setCode(text.default);
        })();
    }, []);

    return (
        <>
            <Highlighter code={code}/>
            <Comp/>
        </>
    )
}

export default Example;