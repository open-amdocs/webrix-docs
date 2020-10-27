import React from 'react';
import {Container} from 'components';
import bricks from '../../resources/images/bricks.png';
import './ErrorBoundary.scss';

export default class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {hasError: true};
    }

    render() {
        return !this.state.hasError ? this.props.children : (
            <Container>
                <div className='error-page'>
                    <img src={bricks}/>
                    <div className='content'>
                        <h1>Sorry, something went wrong!</h1>
                        <p>We're scratching our heads right now trying to figure out what we did wrong.<br/>
                        This may take a while though, so feel free to navigate to a different page...</p>
                    </div>
                </div>
            </Container>
        );
    }
}