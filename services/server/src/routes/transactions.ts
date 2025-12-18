import { Router } from 'express'

import { addIncome, deleteIncome, getIncomes } from '../controllers/incomes'
import { addExpense, deleteExpense, getExpenses } from '../controllers/expenses'

const router = Router()

router
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .delete('/delete-income/:id', deleteIncome)
  .post('/add-expense', addExpense)
  .get('/get-expenses', getExpenses)
  .delete('/delete-expense/:id', deleteExpense)

export default router
