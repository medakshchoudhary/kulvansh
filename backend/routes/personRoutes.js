import { Router } from "express";

import {
    createPerson,
    getPerson,
    getPersons,
    updatePerson,
    deletePerson
} from "../controllers/personController.js"

const router = Router();

router.post("/", createPerson);
router.get("/", getPersons);
router.get("/:id", getPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;