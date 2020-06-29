import React, {memo}  from 'react';

// This component must be standalone, since if it is rerendered, the entire route
// gets rerendered too (this is related to React.lazy somehow).
const Demo = ({file, id}) => {
    const Comp = React.lazy(() => import(`../../../../routes/Docs/content/${file}`));
    return (
        <div id={id}>
            <Comp/>
        </div>
    );
};

export default memo(Demo);