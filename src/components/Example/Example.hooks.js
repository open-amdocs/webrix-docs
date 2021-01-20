import {useEffect, useState} from 'react';

export const useCode = path => {
    const [code, setCode] = useState({js: '', scss: ''});

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!content/${path}.jsx`);
            const style = await import(`!raw-loader!content/${path}.scss`);
            setCode({
                js: text.default.trim(),
                scss: style.default.trim(),
            });
        })();
    }, []);

    return code;
}