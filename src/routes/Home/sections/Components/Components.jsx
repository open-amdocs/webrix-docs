import React from 'react';
import {Container} from 'components';
import {FaCube} from 'react-icons/fa';
import './Components.scss';

const COMPONENTS = ['Stackable', 'Movable', 'Pannable', 'Poppable', 'Zoomable', 'Collapsible', 'Resizable', 'Scrollable'];

const Features = () => (
    <Container>
        <section className='components'>
            <h2>Components</h2>
            <div className='grid'>
                {COMPONENTS.map(component => (
                    <a href={`/docs/components/${component.toLowerCase()}`} className='component'>
                        <FaCube/>
                        {component}
                    </a>
                ))}
            </div>
        </section>
    </Container>
);

export default Features;