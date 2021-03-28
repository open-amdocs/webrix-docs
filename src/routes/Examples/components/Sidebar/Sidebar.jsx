import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cls from 'classnames';
import Search from '../Search/Search';
import ITEMS from '../../Examples.routes';
import './Sidebar.scss';

const Sidebar = () => {
    const [query, setQuery] = useState('');
    const {pathname} = useLocation();
    const items = ITEMS.filter(({title, tags}) => {
        const q = query.trim().toLowerCase();
        return title.toLowerCase().includes(q)
            || tags.some(tag => tag.toLowerCase().includes(q))
    });

    return (
        <nav>
            <Search value={query} onChange={setQuery}/>
            <ul>
                {items.length === 0 && <div className='no-results'>No examples found</div>}
                {items.map(({title, path, tags}) => (
                    <li key={title} className={cls({active: pathname === path})}>
                        <Link to={path}>
                            {title}
                            <div className='tags'>
                                {tags.map(tag => (
                                    <div key={tag} className='tag'>{tag}</div>
                                ))}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;