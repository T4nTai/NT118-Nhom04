import Router from 'express';
import AuthRouter from './auth.routes.js';
import TodoRouter from './todo.routes.js';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/todos', TodoRouter);

export default router;