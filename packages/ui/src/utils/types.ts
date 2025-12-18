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
  id: number
  title: string
  amount: number
  date: Date
  category: string
  description: string | null
}

export interface Income {
  id: number
  title: string
  amount: number
  date: Date
  category: string
  description: string | null
}

export const EXPENSES_CATEGORY_ICON_MAP: Record<string, IconName> = {
  education: 'book',
  groceries: 'food',
  health: 'medical',
  subscriptions: 'tv',
  takeaways: 'takeaway',
  clothing: 'clothing',
  travelling: 'freelance',
  other: 'circle',
  salary: 'money',
  freelancing: 'freelance',
  investments: 'stocks',
  stocks: 'users',
  bitcoin: 'bitcoin',
  bank: 'card',
  youtube: 'yt',
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

export type Transaction = Income
