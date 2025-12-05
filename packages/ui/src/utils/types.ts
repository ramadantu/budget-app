export type ExpenseCategory =
  | 'education'
  | 'groceries'
  | 'health'
  | 'subscriptions'
  | 'takeaways'
  | 'clothing'
  | 'travelling'
  | 'other'

export type IncomeCategory =
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
  category: ExpenseCategory | null
  description: string
  type: 'expenses'
  createdAt: Date
}

export interface Income {
  id: string
  title: string
  amount: number | null
  date: Date | null
  category: IncomeCategory | null
  description: string
  type: 'incomes'
  createdAt: Date
}

export type Transaction = Expense | Income
