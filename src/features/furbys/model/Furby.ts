import mongoose, { Schema } from "mongoose";
import type { FurbyStructure } from "../types";

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

const Furby = mongoose.model("Furby", furbySchema, "furbys");

export default Furby;
