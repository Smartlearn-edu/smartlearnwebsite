import { Router, type IRouter } from "express";
import healthRouter from "./health";
import pluginsRouter from "./plugins";

const router: IRouter = Router();

router.use(healthRouter);
router.use(pluginsRouter);

export default router;
