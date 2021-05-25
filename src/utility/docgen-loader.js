import {parse} from 'react-docgen';

/**
 * getProps
 * Creates a dummy component and use it as the context for the proptypes & defaultProps
 * @param {string} source proptypes file raw content
 */
export default source => {
    const before = 'const Foo = () => <div/>\n';
    source = source.replace('export const ', before + 'Foo.');
    source = source.replace('export const ', 'Foo.');
    source += '\nexport default Foo;';
    return parse(source);
}