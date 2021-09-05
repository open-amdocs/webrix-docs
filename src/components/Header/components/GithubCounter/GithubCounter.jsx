import React, {useState, useEffect} from 'react';
import {FaGithub} from 'react-icons/fa';
import './GithubCounter.scss';

const GithubCounter = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await fetch('https://api.github.com/repos/open-amdocs/webrix').then(res => res.json());
            setCount(data.stargazers_count);
        })();
    }, []);

    return (
        <a href='https://github.com/open-amdocs/webrix/' className='github-counter'>
            <FaGithub/>
            <span className='stargazers'>
                {count === null ? '...' : count}
            </span>
        </a>
    );
}

export default GithubCounter;