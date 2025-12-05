import { Icon } from '@budget-app/ui'

export type Category =
  | 'education'
  | 'groceries'
  | 'health'
  | 'subscriptions'
  | 'takeaways'
  | 'clothing'
  | 'travelling'
  | 'other'

interface ExpensesCategoriesProps {
  category: Category | null
  handleInput: (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const getExpensesCategoriesIcon = (category: Category | null) => {
  switch (category) {
    case 'education':
      return <Icon name="book" />
    case 'groceries':
      return <Icon name="food" />
    case 'health':
      return <Icon name="medical" />
    case 'subscriptions':
      return <Icon name="tv" />
    case 'takeaways':
      return <Icon name="takeaway" />
    case 'clothing':
      return <Icon name="clothing" />
    case 'travelling':
      return <Icon name="freelance" />
    case 'other':
      return <Icon name="circle" />
    default:
      return null
  }
}

function ExpensesCategories({ category, handleInput }: ExpensesCategoriesProps) {
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

export default ExpensesCategories
