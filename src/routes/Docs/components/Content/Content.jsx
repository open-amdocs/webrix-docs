import {Container} from '../../../../components';
import LoremIpsum from '../../../Home/components/LoremIpsum/LoremIpsum';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
// import Docs from '../../../../../submodules/webrix/src/Movable/readme.md';
import Docs from './Readme.mdx';

const Installation = () => (
    <>
        <Docs/>
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
        <article>
            <Switch>
                <Redirect from={match.url} to={`${match.url}/installation`} exact/>
                <Route path={match.url + '/installation'} component={Installation}/>
                <Route path={match.url + '/movable'} component={Movable}/>
            </Switch>
        </article>
    );
}

export default Content;