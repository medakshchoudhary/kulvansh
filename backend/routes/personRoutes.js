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
router.get("/person", getPerson);
router.get("/persons", getPersons);
router.put("/update", updatePerson);
router.delete("/delete", deletePerson);

export default router;