import React from 'react';
import Feature from './Feature';
import {Container, Divider} from 'components';
import {FaBoxOpen, FaCopyright, FaLayerGroup, FaShoePrints, FaTree} from 'react-icons/fa';
import './Features.scss';

const Features = () => (
    <>
        <Container>
            <section className='features'>
                <Feature title='Low Level' icon={<FaLayerGroup/>}>
                    <p>Webrix is not a component bank, but rather a set of low-level components (bricks) with which you can
                        create your own component bank.</p>
                </Feature>
                <Feature title='Single Responsibility' icon={<span>1</span>}>
                    <p>As opposed to other UI component banks, where each component comes packed with features that you don't need,
                        in Webrix each component (brick) has a single, dedicated responsibility.</p>
                </Feature>
                <Feature title='Unbranded' icon={<FaCopyright/>}>
                    <p>Each brick come with little to no CSS, so you won't have to override anything
                        to make it look the way you want to.</p>
                </Feature>
                <Feature title='Matured' icon={<FaTree/>}>
                    <p>Webrix is already used in one of Amdocs' largest products, and has been for the past few years.
                        We've faced many challenges, and created different bricks to solve them.</p>
                </Feature>
                <Feature title='Small Footprint' icon={<FaShoePrints/>}>
                    <p>The minified version of the library is only around ~{LIBRARY_SIZE/*global LIBRARY_SIZE*/}kb. However, Webrix' is structured
                        in a way that supports tree-shaking, allowing you to only bundle what you're using.</p>
                </Feature>
                <Feature title='Comprehensive' icon={<FaBoxOpen/>}>
                    <p>Bricks can be used individually, or mixed together to create more complex components.</p>
                </Feature>
            </section>
        </Container>
        <Divider className='features'/>
    </>
);

export default Features;