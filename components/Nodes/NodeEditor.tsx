"use client";

import React, { useCallback, useEffect } from "react";
import {
    ReactFlow,
    ReactFlowProvider,
    applyNodeChanges,
    applyEdgeChanges,
    Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { EditorNodeTypes } from "@/types/EditorNodeTypes";
import { useAtom } from "jotai";
import { NodeType } from "@/types/NodeType";
import { EdgesAtom, NodesAtom } from "@/store/Nodes/NodesAndEdgesStore";
import { EdgeType } from "@/types/EdgeType";
import { SelectedNodeAtom } from "@/store/Nodes/SelectedNode";
import { v4 as uuidv4 } from "uuid";

export default function App() {
    const [nodes, setNodes] = useAtom<NodeType[]>(NodesAtom);
    const [edges, setEdges] = useAtom<EdgeType[]>(EdgesAtom);
    const [selectedNode, setSelectedNode] = useAtom(SelectedNodeAtom);

    // --- React Flow Core Handlers ---
    const onNodesChange = useCallback(
        (changes) =>
            setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        []
    );

    const onEdgesChange = useCallback(
        (changes) =>
            setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        []
    );

    // --- When connecting nodes ---
    const onConnect = useCallback(
        (params) => {
            const sourceNode = nodes.find((n) => n.id === params.source);

            const newEdge: EdgeType = {
                id: uuidv4(),
                source: params.source,
                sourceHandle: params.sourceHandle,
                target: params.target,
                targetHandle: params.targetHandle,
                label: "",
                animated:
                    !!sourceNode?.data && Object.keys(sourceNode.data).length > 0,
            };

            setEdges((prevEdges) => {
                const existingEdgeIndex = prevEdges.findIndex(
                    (e) => e.target === params.target && e.targetHandle === params.targetHandle
                );

                if (existingEdgeIndex !== -1) {
                    const updatedEdges = [...prevEdges];
                    updatedEdges[existingEdgeIndex] = newEdge;
                    return updatedEdges;
                }

                return [...prevEdges, newEdge];
            });
        },
        []
    );

    // --- Auto animate edges when node data changes ---
    useEffect(() => {
        setEdges((prevEdges) => {
            return prevEdges.map((edge) => {
                const sourceNode = nodes.find((n) => n.id === edge.source);
                const shouldAnimate =
                    !!sourceNode?.data && Object.keys(sourceNode.data).length > 0;
                return { ...edge, animated: shouldAnimate };
            });
        });
    }, [nodes, setEdges]);

    return (
        <div
            onClick={() => setSelectedNode("")}
            style={{ width: "100vw", height: "100vh", position: "relative" }}
        >
            <ReactFlowProvider>
                <Background
                    gap={13}
                    variant={"lines"}
                    color="oklch(96.7% 0.001 286.375)"
                />
                <ReactFlow
                    nodeTypes={EditorNodeTypes}
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={(event) => event.stopPropagation()}
                    fitView
                />
            </ReactFlowProvider>
        </div>
    );
}
