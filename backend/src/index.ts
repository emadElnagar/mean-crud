import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import itemRouter from "./routes/itemRoutes";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads/images"));

mongoose.connect("mongodb://127.0.0.1:27017/meancrud");

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use("/api/items", itemRouter);

app.listen(port);
