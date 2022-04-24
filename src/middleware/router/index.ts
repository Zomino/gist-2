import { Router } from 'express';
import homeRouter, { HomeRoutes } from './home';
import authRouter, { AuthRoutes } from './auth';

export { HomeRoutes } from './home';
export { AuthRoutes } from './auth';

const router = Router();

router.use(HomeRoutes.BASE, homeRouter);
router.use(AuthRoutes.BASE, authRouter);

export default router;
