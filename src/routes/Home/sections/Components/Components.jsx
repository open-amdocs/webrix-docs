import React from 'react';
import {Container} from 'components';
import {FaCube} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import './Components.scss';

const COMPONENTS = ['Stackable', 'Movable', 'Pannable', 'Poppable', 'Zoomable', 'Collapsible', 'Resizable', 'Scrollable'];

const Features = () => (
    <Container>
        <section className='components'>
            <h2>Components</h2>
            <div className='grid'>
                {COMPONENTS.map(component => (
                    <Button key={component} href={`/docs/components/${component.toLowerCase()}`}>
                        <FaCube/>
                        {component}
                    </Button>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;