import { IconName } from '@budget-app/ui'

export type Category =
  | 'education'
  | 'groceries'
  | 'health'
  | 'subscriptions'
  | 'takeaways'
  | 'clothing'
  | 'travelling'
  | 'other'

export const CATEGORY_ICON_MAP: Record<Category, IconName> = {
  education: 'book',
  groceries: 'food',
  health: 'medical',
  subscriptions: 'tv',
  takeaways: 'takeaway',
  clothing: 'clothing',
  travelling: 'freelance',
  other: 'circle',
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
        <option value="education">Education</option>
        <option value="groceries">Groceries</option>
        <option value="health">Health</option>
        <option value="subscriptions">Subscriptions</option>
        <option value="takeaways">Takeaways</option>
        <option value="clothing">Clothing</option>
        <option value="travelling">Travelling</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}
