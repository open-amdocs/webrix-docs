import React from 'react';
import {Highlighter} from 'components';

export default ({children, className}) => {
    const language = className.replace(/language-/, '')
    return (
        <Highlighter code={children.trim()} language={language}/>
    );
}