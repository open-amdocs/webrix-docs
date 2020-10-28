import React from 'react';
import {slugify} from 'utility';

export default ({children}) => {
    const id = slugify(children);
    return (
        <h2><a id={id} href={`#${id}`}>{children}</a></h2>
    )
}