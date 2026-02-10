import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description?: string;
  image?: string;
  isActive: boolean;
}

const categorySchema: Schema<ICategory> = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model<ICategory>("Category", categorySchema);
