import { IconName } from '../components/Icon'

export type ExpensesCategory =
  | 'education'
  | 'groceries'
  | 'health'
  | 'subscriptions'
  | 'takeaways'
  | 'clothing'
  | 'travelling'
  | 'other'

export type IncomesCategory =
  | 'salary'
  | 'freelancing'
  | 'investments'
  | 'stocks'
  | 'bitcoin'
  | 'bank'
  | 'youtube'
  | 'other'

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

export const EXPENSES_CATEGORY_ICON_MAP: Record<ExpensesCategory, IconName> = {
  education: 'book',
  groceries: 'food',
  health: 'medical',
  subscriptions: 'tv',
  takeaways: 'takeaway',
  clothing: 'clothing',
  travelling: 'freelance',
  other: 'circle',
}

export const INCOMES_CATEGORY_ICON_MAP: Record<IncomesCategory, IconName> = {
  salary: 'money',
  freelancing: 'freelance',
  investments: 'stocks',
  stocks: 'users',
  bitcoin: 'bitcoin',
  bank: 'card',
  youtube: 'yt',
  other: 'piggy',
}

export const expensesCategories: readonly ExpensesCategory[] = [
  'education',
  'groceries',
  'health',
  'subscriptions',
  'takeaways',
  'clothing',
  'travelling',
  'other',
]

export const incomesCategories: readonly IncomesCategory[] = [
  'salary',
  'freelancing',
  'investments',
  'stocks',
  'bitcoin',
  'bank',
  'youtube',
  'other',
]

export type Transaction = Expense | Income
