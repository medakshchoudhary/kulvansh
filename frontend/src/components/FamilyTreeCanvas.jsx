import React, { useMemo } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function FamilyTreeCanvas({ tree }) {

  const { nodes, edges } = useMemo(() => {
    const nodes = [];
    const edges = [];

    function traverse(node, level = 0, index = 0, parentId = null) {
      if (!node) return;

      const nodeId = node.id.toString();

      nodes.push({
        id: nodeId,
        data: { label: node.name },
        position: { x: index * 250, y: level * 150 }
      });

      if (parentId) {
        edges.push({
          id: `${parentId}-${nodeId}`,
          source: parentId,
          target: nodeId
        });
      }

      if (node.spouse) {
        const spouseId = node.spouse.id.toString();

        nodes.push({
          id: spouseId,
          data: { label: node.spouse.name },
          position: { x: index * 250 + 120, y: level * 150 }
        });

        edges.push({
          id: `${nodeId}-${spouseId}`,
          source: nodeId,
          target: spouseId,
          animated: true
        });
      }

      node.children?.forEach((child, i) =>
        traverse(child, level + 1, index + i, nodeId)
      );
    }

    traverse(tree);
    return { nodes, edges };
  }, [tree]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
