import { Router } from "express";

import {
    createPerson,
    createPersonBulk        ,
    getPerson,
    getPersons,
    updatePerson,
    deletePerson
} from "../controllers/personController.js"

const router = Router();

router.post("/", createPerson);
router.post("/bulk", createPersonBulk);
router.get("/", getPersons);
router.get("/:id", getPerson);
router.patch("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;