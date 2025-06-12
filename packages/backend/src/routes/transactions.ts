import { Router } from 'express';

const router = Router();

router
    .post('/add-income', () => {})
    .get('/get-incomes', () => {})
    .delete('/delete-income/:id', () => {})
    .post('/add-expense', () => {})
    .get('/get-expenses', () => {})
    .delete('/delete-expense/:id', () => {})

export default router;