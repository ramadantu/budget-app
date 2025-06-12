import { Router } from 'express';
import { addIncome, deleteIncome, getIncomes } from '../controllers/income';
import { addExpense, deleteExpense, getExpenses } from '../controllers/expense';

const router = Router();

router
    .post('/add-income', (req, res) => { addIncome(req, res)})
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', (req, res) => { addExpense(req, res) })
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

export default router;