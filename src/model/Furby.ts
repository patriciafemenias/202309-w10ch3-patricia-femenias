import { Schema } from "mongoose";
import type { FurbyStructure } from "../features/furbys/types.js";

const furbySchema = new Schema<FurbyStructure>({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default Schema;
