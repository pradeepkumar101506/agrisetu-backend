import { Router } from "express";
import userRoutes from "./user.routes";
import quotationRoutes from "./quotation.routes";
import categoryRoutes from "./category.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/quotations", quotationRoutes);
router.use("/category", categoryRoutes);

export default router;
