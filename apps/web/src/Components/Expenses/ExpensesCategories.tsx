import { book, circle, clothing, food, freelance, medical, takeaway, tv } from '../../utils/Icons'

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
      return book
    case 'groceries':
      return food
    case 'health':
      return medical
    case 'subscriptions':
      return tv
    case 'takeaways':
      return takeaway
    case 'clothing':
      return clothing
    case 'travelling':
      return freelance
    case 'other':
      return circle
    default:
      return ''
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
