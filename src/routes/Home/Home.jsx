import React from 'react';
import {Link} from 'react-router-dom';
import FallingBricks from './components/FallingBricks/FallingBricks';
import LoremIpsum from './components/LoremIpsum/LoremIpsum';
import InfoBox from './components/InfoBox/InfoBox';
import {DOCS} from '../Router.routes';
import {Button, Container} from 'components';
import logo from '../../resources/images/webrix-logo-light.png';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className='title'>
                <img src={logo} alt='Webrix logo' loading='lazy'/>
                <h2>Powerful building blocks for React-based web applications</h2>
                <div className='actions'>
                    <Button><Link>Get Started</Link></Button>
                    <Button type={Button.Types.SECONDARY}><Link to={DOCS.path}>Documentation</Link></Button>
                </div>
            </div>
            <FallingBricks/>
            <Container>
                <section>
                    <InfoBox title='Amazing'>
                        <p><LoremIpsum words={20}/></p>
                        <p><LoremIpsum words={50}/></p>
                    </InfoBox>
                    <InfoBox title='Awesome'>
                        <p><LoremIpsum words={20}/></p>
                        <p><LoremIpsum words={50}/></p>
                    </InfoBox>
                    <InfoBox title='Incredible'>
                        <p><LoremIpsum words={20}/></p>
                        <p><LoremIpsum words={50}/></p>
                    </InfoBox>
                </section>
            </Container>
        </>
    )
};

export default Home;