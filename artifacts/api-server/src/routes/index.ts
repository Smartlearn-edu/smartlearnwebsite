import { Router, type IRouter } from "express";
import healthRouter from "./health";
import pluginsRouter from "./plugins";
import testimonialsRouter from "./testimonials";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(pluginsRouter);
router.use(testimonialsRouter);
router.use(contactRouter);

export default router;
