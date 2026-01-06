import { useEffect, useState } from "react";
import api from "../api/api";
import FamilyTreeCanvas from "./FamilyTreeCanvas";

export default function TreeView({ rootId }) {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTree() {
      try {
        const res = await api.get(`/tree/${rootId}`);
        setTree(res.data);
      } catch (err) {
        console.error("Error loading tree:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTree();
  }, [rootId]);

  if (loading) return <p className="p-6">Loading…</p>;
  if (!tree) return <p className="p-6">No data found</p>;

  return <FamilyTreeCanvas tree={tree} />;
}
