import React, {useState, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import {Scrollable} from 'webrix/components';
import ITEMS from '../../Examples.routes';
import Search from '../Search/Search';
import Item from './Item';
import Preview from './Preview';
import './Sidebar.scss';

const Sidebar = () => {
    const reference = useRef();
    const [preview, setPreview] = useState();
    const {pathname, search} = useLocation();
    const [query, setQuery] = useState(new URLSearchParams(search).get('q') || '');
    const items = ITEMS.filter(({title, tags}) => {
        const q = query.trim().toLowerCase();
        return title.toLowerCase().includes(q)
            || tags.some(tag => tag.toLowerCase().includes(q))
    });
    const onMouseEnter = (ref, path) => {
        reference.current = ref;
        setPreview(path);
    };

    return (
        <nav>
            <Scrollable>
                <Search value={query} onChange={setQuery}/>
                <ul onMouseLeave={() => setPreview('')}>
                    {items.length === 0 && <div className='no-results'>No examples found</div>}
                    {items.map(({title, path, tags}) => (
                        <Item key={title} active={pathname === path} {...{title, path, tags, onMouseEnter}} />
                    ))}
                </ul>
                <Preview reference={reference} path={preview}/>
            </Scrollable>
        </nav>
    );
}

export default Sidebar;