import React from 'react';
import Feature from './Feature';
import {Container} from 'components';
import {FaCopyright, FaLayerGroup, FaShoePrints, FaTree} from 'react-icons/fa';
import './Features.scss';

const Features = () => (
    <Container>
        <section className='features'>
            <Feature title='Low Level' icon={<FaLayerGroup/>}>
                <p>Webrix is not a component bank, but rather a set of low-level components with which you can
                    create your own component bank.</p>
            </Feature>
            <Feature title='Single Responsibility' icon={<span>1</span>}>
                <p>As opposed to other UI component banks, where each component comes packed with features that you don't need,
                    in Webrix each component has a single, dedicated responsibility. You can mix multiple components to create
                    more complex components.</p>
            </Feature>
            <Feature title='Unbranded' icon={<FaCopyright/>}>
                <p>Our components come with little to no CSS, so you won't have to override anything
                    to make it look the way you want to.</p>
            </Feature>
            <Feature title='Matured' icon={<FaTree/>}>
                <p>Webrix is already used in one of Amdocs' largest products, and has been for the past few years.
                    We've faced many challenges, and implemented our solutions to them in Webrix' components.</p>
            </Feature>
            <Feature title='Small Footprint' icon={<FaShoePrints/>}>
                <p>The minified version of the library is only around ~7kb.
                    With proper tree-shaking, it can be less than that - only bundle what you're using.</p>
            </Feature>
        </section>
    </Container>
);

export default Features;