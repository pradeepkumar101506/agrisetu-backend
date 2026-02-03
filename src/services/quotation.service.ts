import Quotation, { IQuotation } from "../models/quotation.model";

export const createQuotation = async (
  data: Partial<IQuotation>,
): Promise<IQuotation> => {
  const created = await Quotation.create(data);
  return created;
};

export const getQuotations = async (): Promise<IQuotation[]> => {
  return Quotation.find().sort({ createdAt: -1 }).exec();
};

export const getQuotationById = async (
  id: string,
): Promise<IQuotation | null> => {
  return Quotation.findById(id).exec();
};

export const updateQuotation = async (
  id: string,
  data: Partial<IQuotation>,
): Promise<IQuotation | null> => {
  return Quotation.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteQuotation = async (
  id: string,
): Promise<IQuotation | null> => {
  return Quotation.findByIdAndDelete(id).exec();
};
