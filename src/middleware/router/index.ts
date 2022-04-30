import { Router } from 'express';
import authRouter from './auth';
import homeRouter from './home';
import loginRouter from './login';
import { AuthRoutes, HomeRoutes, LoginRoutes } from './routes';

const router = Router();

router.use(AuthRoutes.BASE, authRouter);
router.use(HomeRoutes.BASE, homeRouter);
router.use(LoginRoutes.BASE, loginRouter);

export default router;
