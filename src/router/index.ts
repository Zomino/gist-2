import { Router } from 'express';
import authRouter from './auth.router';
import dashboardRouter from './dashboard.router';
import listsRouter from './lists.router';
import loginRouter from './login.router';

const router = Router();

router.use('/', dashboardRouter);
router.use('/auth', authRouter);
router.use('/login', loginRouter);
router.use('/lists', listsRouter);

export default router;
