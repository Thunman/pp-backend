import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

app.use(express.json());
app.use(router);

const startServer = async () => {
  try {
    await mongoose
      .connect(mongoUrl)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.error(error);
      });
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
