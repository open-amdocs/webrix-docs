import React from 'react';
import {Container} from 'components';
import Button from '../../components/Button/Button';
import components from '../../../Docs/content/components/components.routes';
import './Components.scss';

const Features = () => (
    <Container>
        <section className='components'>
            <h2>Components</h2>
            <div className='grid'>
                {components.map(({path, title, icon: Icon}) => (
                    <Button key={title} href={`/docs/components${path}`}>
                        <Icon/>
                        {title}
                    </Button>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;