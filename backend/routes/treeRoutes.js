import { Router } from "express";
import { buildTree } from "../utils/buildTree.js";

const router = Router();

router.get("/:rootId", async (req, res) => {
  try {
    const tree = await buildTree(req.params.rootId);
    res.json(tree);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error building tree" });
  }
});

export default router;
