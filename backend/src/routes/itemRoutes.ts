import { Router } from "express";
import { allItems, newItem } from "../controllers/itemControllers";

const itemRouter = Router();

// New item
itemRouter.post("/", newItem);

// Get all items
itemRouter.get("/", allItems);

export default itemRouter;
