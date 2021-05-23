import {BASE_URL, HOOKS, INTRODUCTION} from './AsyncPage.constants';

export const getPathToSource = ({path, title}) => {
    const type = path.split('/')[1];
    if (type === INTRODUCTION) { return null; }
    const isHooks = type === HOOKS;
    const name = isHooks ? title.slice(0, -2) : title;
    const extension = isHooks ? 'js' : 'jsx';
    return `${BASE_URL}/${type}/${name}/${name}.${extension}`;
}