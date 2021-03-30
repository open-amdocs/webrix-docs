import React, {useRef} from 'react';
import cls from 'classnames';
import {Link} from 'react-router-dom';
import './Item.scss';

export default ({title, path, active, tags, onMouseEnter}) => {
    const ref = useRef();
    return (
        <li className={cls({active})} ref={ref} onMouseEnter={() => onMouseEnter(ref.current, path)}>
            <Link to={path}>
                {title}
                <div className='tags'>
                    {tags.map(tag => (
                        <div key={tag} className='tag'>{tag}</div>
                    ))}
                </div>
            </Link>
        </li>
    );
}