import { Category as ExpensesCategory } from '../components/ExpensesDropdown'
import { Category as IncomesCategory } from '../components/IncomesDropdown'

export interface Expense {
  id: string
  title: string
  amount: number | null
  date: Date | null
  category: ExpensesCategory | null
  description: string
  type: 'expenses'
  createdAt: Date
}

export interface Income {
  id: string
  title: string
  amount: number | null
  date: Date | null
  category: IncomesCategory | null
  description: string
  type: 'incomes'
  createdAt: Date
}

export type Transaction = Expense | Income
