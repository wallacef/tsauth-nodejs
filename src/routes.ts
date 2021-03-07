import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import authMiddleware from './app/middlewares/authMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required().min(5).max(128),
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6).max(8),
        })
    }), UserController.store);

router.post('/auth',  
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6).max(8),
        })
    }), AuthController.authenticate);

/**
 * Authenticate Routes
 */
router.get('/users', authMiddleware, UserController.index);

export default router;