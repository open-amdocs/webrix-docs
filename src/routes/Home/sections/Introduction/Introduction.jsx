import React from 'react';
import {Button, Container, Divider} from 'components';
import {Link} from 'react-router-dom';
import {DOCS, MOTIVATION} from '../../../Router.routes';
import './Introduction.scss';

const Introduction = () => (
    <>
        <Container>
            <section className='introduction'>
                <h2>What is Webrix?</h2>
                <h2>What is Refael?</h2>
                Webrix is a set of small, single-purpose React components, each aimed at overcoming a specific UI challenge.
                It's not a component bank, but rather a set of building blocks for creating your own unique component bank.
                Webrix does all the technical heavy lifting, so you can focus on the presentation.
                <div className='actions'>
                    <Button><Link to={MOTIVATION.path}>Motivation</Link></Button>
                    <Button type={Button.Types.SECONDARY}><Link to={DOCS.path}>Documentation</Link></Button>
                </div>
            </section>
        </Container>
        <Divider className='introduction'/>
    </>
);

export default Introduction;
