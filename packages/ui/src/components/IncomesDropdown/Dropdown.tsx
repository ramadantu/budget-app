import { IconName } from '@budget-app/ui'

export type Category =
  | 'salary'
  | 'freelancing'
  | 'investments'
  | 'stocks'
  | 'bitcoin'
  | 'bank'
  | 'youtube'
  | 'other'

export const CATEGORY_ICON_MAP: Record<Category, IconName> = {
  salary: 'money',
  freelancing: 'freelance',
  investments: 'stocks',
  stocks: 'users',
  bitcoin: 'bitcoin',
  bank: 'card',
  youtube: 'yt',
  other: 'piggy',
}

export interface DropdownProps {
  category: Category | null
  handleInput: (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Dropdown({ category, handleInput }: DropdownProps) {
  return (
    <div className="selects input-control">
      <select
        required
        value={category ?? ''}
        name="category"
        id="category"
        onChange={handleInput('category')}
      >
        <option value="" disabled>
          Select Option
        </option>
        <option value="salary">Salary</option>
        <option value="freelancing">Freelancing</option>
        <option value="investments">Investiments</option>
        <option value="stocks">Stocks</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="bank">Bank Transfer</option>
        <option value="youtube">Youtube</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}
