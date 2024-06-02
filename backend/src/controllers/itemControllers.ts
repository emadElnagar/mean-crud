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
