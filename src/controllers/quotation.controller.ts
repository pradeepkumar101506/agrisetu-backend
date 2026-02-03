import { Request, Response, NextFunction } from "express";
import * as quotationService from "../services/quotation.service";

export const createQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const created = await quotationService.createQuotation(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const getQuotations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const list = await quotationService.getQuotations();
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const item = await quotationService.getQuotationById(id as string);
    if (!item) return res.status(404).json({ message: "Quotation not found" });
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const updateQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const updated = await quotationService.updateQuotation(
      id as string,
      req.body,
    );
    if (!updated)
      return res.status(404).json({ message: "Quotation not found" });
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteQuotation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const removed = await quotationService.deleteQuotation(id as string);
    if (!removed)
      return res.status(404).json({ message: "Quotation not found" });
    res.json({ message: "Quotation deleted" });
  } catch (error) {
    next(error);
  }
};
