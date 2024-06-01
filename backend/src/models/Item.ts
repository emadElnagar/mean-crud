import { Schema, model } from "mongoose";

interface Item {
  name: string;
}

const itemSchema = new Schema<Item>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Item = model("Item", itemSchema);
export default Item;
