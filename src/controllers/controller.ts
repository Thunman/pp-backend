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
};
