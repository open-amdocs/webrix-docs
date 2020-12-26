import React, {useState, useEffect} from 'react';
import cls from 'classnames';
import {FaFile, FaFolder, FaAngleRight} from 'react-icons/fa';
import {Collapsible} from 'webrix/components';
import './style.scss';

const FILES = [
    [
        'Folder 1',
        [
            'Subfolder',
            'script.js',
            'style.css',
            'image.jpg',
        ],
        'script.js',
        'style.css',
        'image.jpg',
    ],
    [
        'Folder 2',
        'script.js',
        'style.css',
        'image.jpg',
    ],
    [
        'Folder 3',
        'script.js',
        'style.css',
        'image.jpg',
    ],
    'script.js',
    'style.css',
    'image.jpg',
];

const mapper = entry => (
    Array.isArray(entry) ? <Folder key={entry[0]} files={entry}/> : <File key={entry} name={entry}/>
);

const File = ({name}) => (
    <div className='file' tabIndex={1}>
        <FaFile className='fa-file'/>{name}
    </div>
);

const Folder = ({files: [name, ...files]}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={cls('folder', {expanded})}>
            <div className='header' tabIndex={1} onClick={() => setExpanded(state => !state)}>
                <FaAngleRight className='fa-angle-right'/><FaFolder className='fa-folder'/>{name}
            </div>
            <Collapsible expanded={expanded} className='files'>
                {files.map(mapper)}
            </Collapsible>
        </div>
    );
};

export default () => {
    useEffect(() => {
        // Focus on the first folder initially, without scrolling into view (to prevent it in the home page)
        const x = window.scrollX, y = window.scrollY;
        document.querySelector('.folder .header').focus();
        window.scrollTo(x, y);
    }, []);
    return (
        <div className='browser'>
            {FILES.map(mapper)}
        </div>
    );
}