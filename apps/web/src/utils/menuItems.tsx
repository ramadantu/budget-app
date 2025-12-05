import { Icon } from '@budget-app/ui'

import { Route } from '../constants'

export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <Icon name="dashboard" />,
    link: Route.Dashboard,
  },
  {
    id: 2,
    title: 'View Transactions',
    icon: <Icon name="transactions" />,
    link: Route.Transactions,
  },
  {
    id: 3,
    title: 'Incomes',
    icon: <Icon name="trend" />,
    link: Route.Incomes,
  },
  {
    id: 4,
    title: 'Expenses',
    icon: <Icon name="expenses" />,
    link: Route.Expenses,
  },
]
