import {getParameters} from 'codesandbox/lib/api/define';
import rootpkg from '../../../../../package.json';
import pkg from './files/package.json';
import index from '!raw-loader!./files/index.js';
import html from '!raw-loader!./files/index.html';
import colors from '!raw-loader!../../../../resources/styles/colors.scss';

// Convert the SCSS variables to a JS object
const _colors = [...colors.matchAll(/\$color-([\w-]+): (#\w+)/g)].reduce((obj, [, name, value]) => ({...obj, [name]: value}), {});

// Match the webrix version to the one in root
pkg.dependencies.webrix = rootpkg.dependencies.webrix;

export default ({code, style}) => getParameters({
    files: {
        'package.json': {
            content: pkg,
        },
        'index.js': {
            content: index,
        },
        'index.html': {
            content: html,
        },
        'Example.jsx': {
            content: code.replace(/\w+.scss/, 'style.scss'),
        },
        'style.scss': {
            content: style.replace(/\$color-([\w-]+)/g, (_, key) => _colors[key]), // Replace every color variable with its value
        },
    },
});