import { IconName } from '@budget-app/ui'

import { Route } from '../constants'

type MenuItem = {
  title: string
  iconName: IconName
  link: Route
}

export const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    iconName: 'dashboard',
    link: Route.Dashboard,
  },
  {
    title: 'Incomes',
    iconName: 'trend',
    link: Route.Incomes,
  },
  {
    title: 'Expenses',
    iconName: 'expenses',
    link: Route.Expenses,
  },
]
