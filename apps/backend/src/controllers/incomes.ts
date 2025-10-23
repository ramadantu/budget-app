import { Request, Response } from 'express'
import prisma from '../db/Prisma'

export const addIncome = async (req: Request, res: Response) => {
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
    await prisma.incomes.create({
      data: {
        title,
        description,
        category,
        amount: Number(amount),
        date,
      }
    })

    res.status(200).json({ message: 'Income Added' })
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const getIncomes = async (_req: Request, res: Response) => {
  try {
    const incomes = await prisma.incomes.findMany({
      orderBy: {
        date: 'desc',
      },
    })

    res.status(200).json(incomes)
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}

export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    res.status(400).json({ message: 'Income ID is required' })
    return 
  }

  try {
    await prisma.incomes.delete({
      where: {
        id: parseInt(id)
      }
    })

    res.status(200).json({ message: 'Income Deleted' })
  } catch (error: any) {
    res.status(500).json({ message: 'Server Error', error: error.message })
  }
}
