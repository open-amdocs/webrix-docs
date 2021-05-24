import {BASE_URL, HOOKS, INTRODUCTION} from './AsyncPage.constants';

export const getPathToSource = ({path, title}) => {
    const type = path.split('/')[1];
    if (type === INTRODUCTION) { return null; }
    const [name, extension] = type === HOOKS ? [title.slice(0, -2), 'js'] : [title, 'jsx'];
    return `${BASE_URL}/${type}/${name}/${name}.${extension}`;
}
