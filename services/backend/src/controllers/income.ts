import { Request, Response } from 'express'
import IncomeModel from '../models/IncomeModel'

export const addIncome = async (req: Request, res: Response) => {
  const { title, amount, category, description, date } = req.body

  if (!title || !category || !description || !date) {
    return res.status(400).json({ message: 'All fields are required!' })
  }
  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ message: 'Amount must be a positive number!' })
  }

  const income = new IncomeModel({
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    await income.save()
    res.status(200).json({ message: 'Income Added' })
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const getIncomes = async (req: Request, res: Response) => {
  try {
    const incomes = await IncomeModel.find().sort({ createdAt: -1 })
    res.status(200).json(incomes)
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await IncomeModel.findByIdAndDelete(id)
    res.status(200).json({ message: 'Income Deleted' })
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}
