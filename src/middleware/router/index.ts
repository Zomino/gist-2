import { Router } from 'express';
import authRouter from './auth.router';
import homeRouter from './home.router';
import loginRouter from './login.router';

const router = Router();

router.use('/', homeRouter);
router.use('/auth', authRouter);
router.use('/login', loginRouter);

export default router;
