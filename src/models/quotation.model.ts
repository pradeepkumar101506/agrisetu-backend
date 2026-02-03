import mongoose, { Document, Schema } from "mongoose";

export interface IQuotation extends Document {
  userName: string;
  email: string;
  contactNumber: number;
  address: string;
  productName: string;
  quantity: number;
  message?: string;
}

const quotationSchema: Schema<IQuotation> = new Schema(
  {
    userName: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    address: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    message: { type: String, required: false },
  },
  { timestamps: true },
);

export default mongoose.model<IQuotation>("Quotation", quotationSchema);
