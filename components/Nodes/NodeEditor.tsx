// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import React,{useCallback} from 'react';

import {
    ReactFlow, ReactFlowProvider, applyNodeChanges, applyEdgeChanges, Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {EditorNodeTypes} from "@/types/EditorNodeTypes";
import {useAtom} from "jotai";
import {NodeType} from "@/types/NodeType";
import {EdgesAtom, NodesAtom} from "@/store/Nodes/NodesAndEdgesStore";
import {EdgeType} from "@/types/EdgeType";

import {SelectedNodeAtom} from "@/store/Nodes/SelectedNode";

import { v4 as uuidv4 } from "uuid";

export default function App() {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);
    const [edges, setEdges] = useAtom<EdgeType[]>(EdgesAtom);
    const [selectedNode, setSelectedNode] = useAtom(SelectedNodeAtom);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );

    const onConnect = useCallback((params) => {
        const newEdge:EdgeType = {
            id:uuidv4(),
            source:params.source,
            sourceHandle:params.sourceHandle,
            target:params.target,
            targetHandle:params.targetHandle,
            label:"",
            animated:true
        };

        setEdges((prevEdges) => [...prevEdges, newEdge]);
    },[]);

    return (
        <div onClick={() => setSelectedNode("")} style={{ width: '100vw', height: '100vh', position: 'relative' }}>
            <ReactFlowProvider>
                <Background gap={13} variant={"lines"} color="oklch(96.7% 0.001 286.375)" />
                <ReactFlow
                    nodeTypes={EditorNodeTypes}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={(event) => {
                        event.stopPropagation();
                    }}
                    fitView
                />
                {/*<Controls/>*/}
            </ReactFlowProvider>
        </div>
    );
}
