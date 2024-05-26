import { Request, Response } from "express";
import { Paste } from "../models/models";

export const controller = {
  save: async (req: Request, res: Response) => {
    try {
      const newPaste = new Paste({
        content: req.body.content,
        date: Date.now(),
      });
      await newPaste.save();
      res.status(200).json({ message: `${newPaste.id}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  get: async (req: Request, res: Response) => {
    try {
      const paste = await Paste.findById(req.body.content);
      if (!paste) {
        return res.status(404).json({ message: "Paste not found" });
      }
      res.status(200).json(paste);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
