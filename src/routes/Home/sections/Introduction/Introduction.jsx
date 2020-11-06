import React from 'react';
import {Button, Container, Divider} from 'components';
import {Link} from 'react-router-dom';
import {DOCS} from '../../../Router.routes';
import './Introduction.scss';

const Introduction = () => (
    <>
        <Container>
            <section className='introduction'>
                <h2>What is Webrix?</h2>
                Webrix is a set of small, single-purpose components, each aimed at overcoming a specific UI challenge.
                It's not a component bank, but rather a set of components with which you can build your own component bank, whether it's basic or highly complex.
                <div className='actions'>
                    <Button><Link to='#'>Get Started</Link></Button>
                    <Button type={Button.Types.SECONDARY}><Link to={DOCS.path}>Documentation</Link></Button>
                </div>
            </section>
        </Container>
        <Divider className='introduction'/>
    </>
);

export default Introduction;