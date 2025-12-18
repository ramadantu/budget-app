import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AcceptedAny } from '@budget-app/ts-utils'
import { prisma } from '@budget-app/prisma'

const ServerErrorMessage = 'Server Error'

export const addExpense = async (req: Request, res: Response) => {
  const { title, amount, category, description, date } = req.body

  if (!title || !category || !description || !date) {
    res.status(400).json({ message: 'All fields are required!' })
    return
  }

  if (Number(amount) <= 0) {
    res.status(400).json({ message: 'Amount must be a positive number!' })
    return
  }

  try {
    await prisma.expenses.create({
      data: {
        title,
        description,
        category,
        amount: parseInt(amount),
        date,
      },
    })
    res.status(200).json({ message: 'Expense Added' })
  } catch (error: AcceptedAny) {
    res.status(500).json({ message: ServerErrorMessage, error: error.message })
  }
}

export const getExpenses = async (_req: Request, res: Response) => {
  try {
    const expenses = await prisma.expenses.findMany({
      orderBy: {
        date: 'desc',
      },
    })
    res.status(200).json(expenses)
  } catch (error: AcceptedAny) {
    res.status(500).json({ message: ServerErrorMessage, error: error.message })
  }
}

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'Expense ID is required' })
    return
  }

  try {
    await prisma.expenses.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.status(200).json({ message: 'Expense Deleted' })
  } catch (error: AcceptedAny) {
    res.status(500).json({ message: ServerErrorMessage, error: error.message })
  }
}
