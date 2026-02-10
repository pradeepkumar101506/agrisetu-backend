import Category, { ICategory } from "../models/category.model";

export const createCategory = async (
  data: Partial<ICategory>,
): Promise<ICategory> => {
  const created = await Category.create(data);
  return created;
};

export const getCategories = async (): Promise<ICategory[]> => {
  return Category.find().sort({ createdAt: -1 }).exec();
};

export const getCategoryById = async (
  id: string,
): Promise<ICategory | null> => {
  return Category.findById(id).exec();
};

export const updateCategory = async (
  id: string,
  data: Partial<ICategory>,
): Promise<ICategory | null> => {
  return Category.findByIdAndUpdate(id, data, { new: true }).exec();
};

export const deleteCategory = async (id: string): Promise<ICategory | null> => {
  return Category.findByIdAndDelete(id).exec();
};
