import { Router } from "express";
import {
  allItems,
  deleteItem,
  newItem,
  updateItem,
} from "../controllers/itemControllers";

const itemRouter = Router();

// New item
itemRouter.post("/", newItem);

// Get all items
itemRouter.get("/", allItems);

// Update item
itemRouter.patch("/:id", updateItem);

// Delete item
itemRouter.delete("/:id", deleteItem);

export default itemRouter;
