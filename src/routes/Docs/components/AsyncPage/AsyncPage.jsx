import React, {Suspense, memo} from 'react';
import {Helmet} from 'react-helmet';
import {FaEdit, FaCode} from 'react-icons/fa';
import {Loader} from 'components';
import {getPathToSource} from './AsyncPage.utils';
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
    const sourceCodeURL = getPathToSource({path, title});

    return (
        <Article components={components}>
            <Helmet>
                <title>{title} - Webrix.js</title>
                <meta name='description' content={description}/>
            </Helmet>
            <h1>
                {title}
                <div className='docs-links'>
                    <a className='docs-link' target='_blank' rel='noreferrer' href={editURL}>
                        <span className='link-text'>Edit This Page</span>
                        <FaEdit/>
                    </a>
                    {sourceCodeURL && <a className='docs-link' target='_blank' rel='noreferrer' href={sourceCodeURL}>
                        <span className='link-text'>Source</span>
                        <FaCode/>
                    </a>}
                </div>
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