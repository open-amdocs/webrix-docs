import React from 'react';
import {Container} from 'components';
import components from 'content/docs/components/components.routes';
import Button from '../../components/Button/Button';
import './Components.scss';

const Components = () => (
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

export default Components;