import React, {useEffect, useRef, useState} from 'react';
import {FaLink} from 'react-icons/fa';
import {slugify} from 'utility';
import './H3.scss';

const getPreviousElementByTag = (el, tag) => {
    let prev = el.previousSibling;
    while (prev !== null && prev.tagName !== tag) {
        prev = prev.previousSibling;
    }
    return prev;
}

export default ({children}) => {
    const [id, setId] = useState('');
    const ref = useRef();

    useEffect(() => {
        // Add the id of the "parent" H2 (parent in terms of content, but sibling in terms of DOM).
        const parentId = getPreviousElementByTag(ref.current, 'H2')?.id || '';
        setId((parentId ? parentId + '-' : '') + slugify(children));
    }, [children]);

    return (
        <h3 ref={ref} id={id}><a href={`#${id}`}><FaLink/>{children}</a></h3>
    );
}