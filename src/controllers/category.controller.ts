import { Request, Response, NextFunction } from "express";
import * as categoryService from "../services/category.service";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const created = await categoryService.createCategory(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const list = await categoryService.getCategories();
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const item = await categoryService.getCategoryById(id as string);
    if (!item) return res.status(404).json({ message: "Category not found" });
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updated = await categoryService.updateCategory(
      id as string,
      req.body,
    );
    if (!updated)
      return res.status(404).json({ message: "Category not found" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const deleted = await categoryService.deleteCategory(id as string);
    if (!deleted)
      return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted successfully", data: deleted });
  } catch (error) {
    next(error);
  }
};
