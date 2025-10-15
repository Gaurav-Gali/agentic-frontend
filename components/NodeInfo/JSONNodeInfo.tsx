import React from 'react';

const JSONNodeInfo:React.FC<{ nodeId: string }> = ({nodeId}) => {
    return (
        <div>
            JSON Node Info - {nodeId}
        </div>
    );
};

export default JSONNodeInfo;