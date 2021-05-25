import React, {useEffect, useState} from 'react';
import getProps from 'utility/docgen-loader';
import './PropsTable.scss'

const getDefaultValue = value => {
    const defaultValue = value.defaultValue ? value.defaultValue.value : null;
    return defaultValue === 'noop' ? '() => null' : defaultValue;
}

const PropsTable = ({filePath}) => {
    const [props, setProps] = useState();

    useEffect(() => {
        setProps(undefined);

        (async () => {
            const text = await import('!raw-loader!../../../../webrix/src/' + filePath);

            if (text && text.default)
                setProps(getProps(text.default))
        })();
    }, [filePath]);

    if( !props )
        return null

    return (
        <table className='props-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {Object.entries(props.props).map((value, index) => {
                return (<tr key={index}>
                    <td><pre>{value[0]}</pre></td>
                    <td>{value[1].type.name}</td>
                    <td><pre>{getDefaultValue(value[1])}</pre></td>
                    <td>{value[1].description}</td>
                </tr>)
            }
            )}
            </tbody>
        </table>
    )
}

export default PropsTable;