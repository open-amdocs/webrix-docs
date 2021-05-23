import React, {Suspense, memo} from 'react';
import {Helmet} from 'react-helmet';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Loader, Article, Highlighter} from 'components';
import Code from './components/Code/Code';
import H2 from './components/H2/H2';
import H3 from './components/H3/H3';
import './AsyncPage.scss';

const components = {
    pre: props => <React.Fragment {...props}/>,
    code: Code,
    h2: H2,
    h3: H3,
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
}

const AsyncPage = ({path, title, description}) => {
    const Comp = React.lazy(() => import(`content/docs${path}/readme.mdx`));
    const editURL = `https://github.com/open-amdocs/webrix-docs/blob/master/src/content/docs${path}/readme.mdx`;

    return (
        <Article components={components}>
            <Helmet>
                <title>{title} - Webrix.js</title>
                <meta name='description' content={description}/>
            </Helmet>
            <h1>
                {title}
                <a target='_blank' rel='noreferrer' href={editURL}>Edit This Page <FaExternalLinkAlt/></a>
            </h1>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
            <div className='contribute'>
                <h4>Help us improve the docs</h4>
                If something is missing or not entirely clear,
                please <a target='_blank' rel='noreferrer' href='https://github.com/open-amdocs/webrix-docs/issues/'>file an issue </a>
                or <a target='_blank' rel='noreferrer' href={editURL}>edit this page</a>.
            </div>
        </Article>
    );
};

export default memo(AsyncPage);