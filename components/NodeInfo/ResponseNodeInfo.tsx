import React from 'react';

const ResponseNodeInfo:React.FC<{ nodeId: string }> = ({nodeId}) => {
    return (
        <div>
            Response Node Info - {nodeId}
        </div>
    );
};

export default ResponseNodeInfo;