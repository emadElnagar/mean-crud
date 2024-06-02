import { Router } from "express";
import { newItem } from "../controllers/itemControllers";

const itemRouter = Router();

// New item
itemRouter.post("/", newItem);

export default itemRouter;
