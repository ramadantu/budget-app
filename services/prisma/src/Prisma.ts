import { PrismaClient, Expenses, Incomes } from '@prisma/client'

const prisma = new PrismaClient()

export { Expenses, Incomes, prisma }
