import {
  Dashboard,
  Transactions,
  Categories,
  Accounts,
  Settings,
  Logout,
  Trend,
  Expenses,
  Money,
  Freelance,
  Stocks,
  Bitcoin,
  Piggy,
  Yt,
  Card,
  Users,
  Dollar,
  Calendar,
  Comment,
  Plus,
  Trash,
  Signout,
  Takeaway,
  Clothing,
  Book,
  Food,
  Medical,
  Tv,
  Circle,
} from './Icons'

const ICONS = {
  dashboard: Dashboard,
  transactions: Transactions,
  categories: Categories,
  accounts: Accounts,
  settings: Settings,
  logout: Logout,
  trend: Trend,
  expenses: Expenses,
  money: Money,
  freelance: Freelance,
  stocks: Stocks,
  bitcoin: Bitcoin,
  piggy: Piggy,
  yt: Yt,
  card: Card,
  users: Users,
  dollar: Dollar,
  calendar: Calendar,
  comment: Comment,
  plus: Plus,
  trash: Trash,
  signout: Signout,
  takeaway: Takeaway,
  clothing: Clothing,
  book: Book,
  food: Food,
  medical: Medical,
  tv: Tv,
  circle: Circle,
}

interface IconProps {
  name: keyof typeof ICONS
}

export default function Icon({ name }: IconProps) {
  const icon = ICONS[name]

  if (!icon) {
    console.warn(`No icon found for name: ${name}`)
    return null
  }

  return icon
}
