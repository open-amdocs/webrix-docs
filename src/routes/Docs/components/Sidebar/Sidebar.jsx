import React, {useState, useEffect} from 'react';
import {Link, useRouteMatch, useLocation} from 'react-router-dom';
import {slugify} from 'utility';
import ROUTES from '../../Docs.routes';
import cls from 'classnames';
import './Sidebar.scss';

const PageItems = () => {
    const {pathname, hash} = useLocation();
    const {path} = useRouteMatch();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const text = await import(`!raw-loader!../../content${pathname.replace(path, '')}/readme.mdx`);
            setItems(text.default.match(/^## ([\w -]+)/gm).map(item => item.replace('## ', '')));
        })();
    }, [])

    return (
        <ul>
            {items.map(item => (
                <li key={item} className={cls({active: hash === `#${slugify(item)}`})}><Link to={`#${slugify(item)}`}>{item}</Link></li>
            ))}
        </ul>
    );
}

const Page = ({url, title}) => {
    const location = useLocation();
    const active = location.pathname === url;

    return (
        <li>
            <Link className={cls({active})} to={url}>{title}</Link>
            {active && <PageItems/>}
        </li>
    );
}

const Section = ({title, pages, path}) => {
    const match = useRouteMatch();
    return (
        <li>
            <div className='title'>{title}</div>
            <ul>
                {pages.map((page, i) => (
                    <Page key={i} url={`${match.url}${path}${page.path}`} title={page.title}/>
                ))}
            </ul>
        </li>
    )
}

const Sidebar = () => (
    <nav id='sidebar'>
        <ul>
            {ROUTES.map((section, i) => (
                <Section key={i} title={section.title} pages={section.routes} path={section.path}/>
            ))}
        </ul>
    </nav>
);

export default Sidebar;
