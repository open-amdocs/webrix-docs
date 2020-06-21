import {Container} from '../../../../components';
import LoremIpsum from '../../../Home/components/LoremIpsum/LoremIpsum';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';

const Installation = () => (
    <>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
    </>
);

const Movable = () => (
    <>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
        <p><LoremIpsum words={120}/></p>
    </>
);

const Content = () => {
    const match = useRouteMatch();
    return (
        <Container>
            <article>
                <Switch>
                    <Redirect from={match.url} to={`${match.url}/installation`} exact/>
                    <Route path={match.url + '/installation'} component={Installation}/>
                    <Route path={match.url + '/movable'} component={Movable}/>
                </Switch>
            </article>
        </Container>
    );
}

export default Content;