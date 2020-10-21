import React from 'react';

export default ({children}) => {
    const id = children.toLowerCase().replace(/ /g, '-');
    const ref = node => {
        const {hash} = window.location;
        if (hash !== '') {
            const id = hash.replace('#', '');
            if (node && node.id === id) node.scrollIntoView();
        }
    };
    return (
        <h2><a id={id} href={`#${id}`} ref={ref}>{children}</a></h2>
    )
}