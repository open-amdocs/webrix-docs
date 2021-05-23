import React from 'react';
import {Helmet} from 'react-helmet';
import {Route, Redirect} from 'react-router-dom';
import routes from './Blog.routes';
import {Container} from 'components';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content'
import './Blog.scss';

const Blog = () => (
    <>
        <Helmet>
            <title>Blog</title>
            <meta name='description' content='webrix blog posts'/>
        </Helmet>
        <Container>
            <Content/>
            <Sidebar/>
        </Container>
        <Route>
            <Redirect to={routes[0].path}/>
        </Route>
    </>
);

export default Blog;