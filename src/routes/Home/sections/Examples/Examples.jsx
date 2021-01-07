import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'components';
import examples from 'routes/Examples/Examples.routes';
import './Examples.scss';

const Examples = () => (
    <Container>
        <section className='examples'>
            <h2>Examples</h2>
            <div className='grid'>
                {examples.map(({path, title, tags}) => (
                    <div className='example' key={title}>
                        <div className='preview' style={{backgroundImage: `url(${require(`../../../../content${path}/preview.gif`).default})`}}/>
                        <div className='text'>View Example</div>
                        <div className='name'>{title}</div>
                        <div className='tags'>
                            {tags.map(t => (
                                <div className='tag' key={t}>{t}</div>
                            ))}
                        </div>
                        <Link to={path}/>
                    </div>
                ))}
            </div>
        </section>
    </Container>
);

export default Examples;