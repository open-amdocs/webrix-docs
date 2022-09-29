import React from 'react';
import {Link} from 'react-router-dom';
import './Preview.scss';

export default ({title, tags, path}) => (
    <Link className='link preview-container' key={title} to={path}>
        <video className='preview' src={require(`../../content${path}/preview.mp4`).default} autoPlay loop playsInline muted/>
        <div className='overlay'/>
        <div className='text'>View Example</div>
        <div className='name'>{title}</div>
        <div className='tags'>
            <div className='tag'>{tags[0]}</div>
            {tags.length > 1 && <div title={tags.slice(1).join(', ')} className='tag'>+{tags.length - 1}</div>}
        </div>
    </Link>
)