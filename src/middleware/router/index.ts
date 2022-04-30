import { Router } from 'express';
import authRouter from './auth';
import homeRouter from './home';
import loginRouter from './login';

const router = Router();

router.use('/', homeRouter);
router.use('/auth', authRouter);
router.use('/login', loginRouter);

export default router;
