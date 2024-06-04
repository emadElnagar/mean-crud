import { Router } from "express";
import { allItems, newItem, updateItem } from "../controllers/itemControllers";

const itemRouter = Router();

// New item
itemRouter.post("/", newItem);

// Get all items
itemRouter.get("/", allItems);

// Update item
itemRouter.patch("/:id", updateItem);

export default itemRouter;
