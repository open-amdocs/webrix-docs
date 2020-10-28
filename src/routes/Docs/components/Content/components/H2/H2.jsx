import React from 'react';
import {FaLink} from 'react-icons/fa';
import {slugify} from 'utility';
import './H2.scss';

export default ({children}) => {
    const id = slugify(children);
    return (
        <h2><a id={id} href={`#${id}`}>{children}</a><FaLink/></h2>
    )
}