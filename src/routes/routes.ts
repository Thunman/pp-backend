import express from "express";
import { controller } from "../controllers/controller";

export const router = express.Router();

router.post("/save", controller.save);
