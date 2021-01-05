import React from 'react';
import {Container} from 'components';
import {FaCode} from 'react-icons/fa';
import hooks from 'content/docs/hooks/hooks.routes';
import Button from '../../components/Button/Button';
import './Hooks.scss';

const Features = () => (
    <Container>
        <section className='hooks'>
            <h2>Hooks</h2>
            <div className='grid'>
                {hooks.map(({title, path}) => (
                    <Button key={path} href={`/docs/hooks${path}`}>
                        <FaCode/>
                        {title}
                    </Button>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;