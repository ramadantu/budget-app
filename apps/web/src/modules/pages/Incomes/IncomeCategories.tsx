import { bitcoin, card, freelance, money, piggy, stocks, users, yt } from '../../../utils/Icons'

export type Category =
  | 'salary'
  | 'freelancing'
  | 'investments'
  | 'stocks'
  | 'bitcoin'
  | 'bank'
  | 'youtube'
  | 'other'

interface IncomeCategoriesProps {
  category: Category | null
  handleInput: (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const getIncomeCategoriesIcon = (category: Category | null) => {
  switch (category) {
    case 'salary':
      return money
    case 'freelancing':
      return freelance
    case 'investments':
      return stocks
    case 'stocks':
      return users
    case 'bitcoin':
      return bitcoin
    case 'bank':
      return card
    case 'youtube':
      return yt
    case 'other':
      return piggy
    default:
      return null
  }
}

function IncomeCategories({ category, handleInput }: IncomeCategoriesProps) {
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

export default IncomeCategories
