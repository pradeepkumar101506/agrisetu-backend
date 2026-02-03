import { Router } from "express";
import userRoutes from "./user.routes";
import quotationRoutes from "./quotation.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/quotations", quotationRoutes);

export default router;
