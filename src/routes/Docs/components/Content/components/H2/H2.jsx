import React from 'react';

export default ({children}) => {
    const id = children.toLowerCase().replace(/ /g, '-');
    return (
        <h2><a id={id} href={`#${id}`}>{children}</a></h2>
    )
}