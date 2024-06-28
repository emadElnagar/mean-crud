import Item from "../models/Item";
import { RequestHandler } from "express";

// New item
export const newItem: RequestHandler = async (req, res) => {
  const foundTitle = await Item.findOne({ title: req.body.tilte });
  if (!foundTitle) {
    interface itemType {
      name: string;
    }
    const item = new Item<itemType>({
      name: req.body.name,
    });
    item
      .save()
      .then((_result) => {
        res.status(200).json({
          message: "Item created successfully",
        });
      })
      .catch((err) => {
        res.status(401).json({
          message: err.message,
        });
      });
  }
  res.json({ message: "This name already exists, Try another name" });
};

// Get all items
export const allItems: RequestHandler = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error: any) {
    res.status(401).json({
      message: error.message,
    });
  }
};

// Get single item
export const singleItem: RequestHandler = async (req, res) => {
  const item = Item.findOne({ _id: req.params.id });
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({
      message: "Item not found",
    });
  }
};

// Update item
export const updateItem: RequestHandler = async (req, res) => {
  const newItem = {
    name: req.body.name,
  };
  Item.updateOne({ _id: req.params.id }, { $set: newItem })
    .then((_result) => {
      res.status(200).json({
        message: "Item updated successfully",
      });
    })
    .catch((error) => {
      res.status(401).json({
        message: error.message,
      });
    });
};

// Delete item
export const deleteItem: RequestHandler = async (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then((_result) => {
      res.status(200).json({
        message: "Item Deleted Successfully",
      });
    })
    .catch((error) => {
      res.status(401).json({
        message: error.message,
      });
    });
};
