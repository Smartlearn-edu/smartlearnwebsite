import { Router, type IRouter } from "express";
import healthRouter from "./health";
import pluginsRouter from "./plugins";
import testimonialsRouter from "./testimonials";

const router: IRouter = Router();

router.use(healthRouter);
router.use(pluginsRouter);
router.use(testimonialsRouter);

export default router;
