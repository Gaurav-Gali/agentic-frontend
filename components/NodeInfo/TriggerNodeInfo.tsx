import React from 'react';

const TriggerNodeInfo:React.FC<{ nodeId: string }> = ({nodeId}) => {
    return (
        <div>
            Trigger Node Info - {nodeId}
        </div>
    );
};

export default TriggerNodeInfo;