import React from 'react';
import './PropsTable.scss'

const PropsTable = () => {

    const getDefaultValue = value => {
        const defaultValue = value.defaultValue ? value.defaultValue.value : null;
        return defaultValue === 'noop' ? '() => null' : defaultValue;
    }

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