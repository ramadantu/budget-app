import { Route } from '../constants'

import { dashboard, expenses, transactions, trend } from './Icons'

export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: dashboard,
    link: Route.Dashboard,
  },
  {
    id: 2,
    title: 'View Transactions',
    icon: transactions,
    link: Route.Transactions,
  },
  {
    id: 3,
    title: 'Incomes',
    icon: trend,
    link: Route.Incomes,
  },
  {
    id: 4,
    title: 'Expenses',
    icon: expenses,
    link: Route.Expenses,
  },
]
