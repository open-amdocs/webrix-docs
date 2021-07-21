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
        const childId = (parentId ? parentId + '-' : '') + slugify(children);
        setId(childId);

        // This part will only be executed when a page is rendered for
        // the first time with a hash, so we need to update the sidebar and
        // scroll the section into view. Further clicks on H2 headings or the
        // sidebar will do that automatically.
        if (window.location.hash === `#${childId}`) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [children]);

    return (
        <h3 ref={ref} id={id}><a href={`#${id}`}><FaLink/>{children}</a></h3>
    );
}