import { pasteSchema } from "../schemas/mongooseSchemas";
import mongoose from "mongoose";

export const Paste = mongoose.model("Paste", pasteSchema);
