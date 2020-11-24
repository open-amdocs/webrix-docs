import React from 'react';
import cls from 'classnames';
import {FaExternalLinkAlt} from 'react-icons/fa';
import './Controls.scss';

export default ({dir, content, onContentChange}) => (
    <div className='controls'>
        {['run', 'jsx', 'scss'].map(c => (
            <a key={c} onClick={() => onContentChange(c)} className={cls({active: content === c})}>{c.toUpperCase()}</a>
        ))}
        <a target='_blank' href={`https://github.com/open-amdocs/webrix-docs/tree/master/src/routes/Docs/content/examples/${dir}`}>GitHub <FaExternalLinkAlt/></a>
    </div>
);