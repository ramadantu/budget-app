import { Request, Response } from 'express'
import ExpenseModel from '../models/ExpenseModel'

export const addExpense = async (req: Request, res: Response) => {
  const { title, amount, category, description, date } = req.body

  if (!title || !category || !description || !date) {
    return res.status(400).json({ message: 'All fields are required!' })
  }
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ message: 'Amount must be a positive number!' })
  }

  const expense = new ExpenseModel({
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    await expense.save()
    res.status(200).json({ message: 'Expense Added' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await ExpenseModel.find().sort({ createdAt: -1 })
    res.status(200).json(expenses)
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await ExpenseModel.findByIdAndDelete(id)
    res.status(200).json({ message: 'Expense Deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}
