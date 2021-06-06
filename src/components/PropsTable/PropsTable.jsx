import React, {useEffect, useState} from 'react';
//import getProps from '../../../docgen-loader';
// import getProps from 'utility/docgen-loader';
import './PropsTable.scss'

const getDefaultValue = value => {
    const defaultValue = value.defaultValue ? value.defaultValue.value : null;
    return defaultValue === 'noop' ? '() => null' : defaultValue;
}

const PropsTable = ({name}) => {
    const [props, setProps] = useState();

    useEffect(() => {
        setProps(undefined);

        (async () => {
            const file = await fetch('https://raw.githubusercontent.com/open-amdocs/webrix/master/src/components/Movable/Movable.props.js');
            const rawFile = await file.text();
            const blob = URL.createObjectURL(rawFile)
            console.log(  blob  )
            const props = await import(`!docgen-loader!../../../../webrix/src/components/${name + '/' + name}.props.js`);
            return;

           // const props = await import(`!docgen-loader!../../../../webrix/src/components/${name + '/' + name}.props.js`);
        //    setProps(props.default)
        })();
    }, [name]);

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