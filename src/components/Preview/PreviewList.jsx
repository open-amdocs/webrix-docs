import React from 'react';
import {Preview} from 'components';
import examples from 'routes/Examples/Examples.routes';
import './PreviewList.scss';

const filter = query => {
    const q = typeof query === 'string' ? [query.toLowerCase()] : query.map(q => q.toLowerCase());
    return ({tags}) => tags.some(tag => {
        const lct = tag.toLowerCase();
        return q.some(s => lct.includes(s))
    });
};

export default ({query = ''}) => (
    <div className='preview-list'>
        {examples.filter(filter(query)).map(({title, tags, path}) => (
            <Preview key={title} {...{title, tags, path}}/>
        ))}
    </div>
);