import { Icon } from '@budget-app/ui'

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
      return <Icon name="money" />
    case 'freelancing':
      return <Icon name="freelance" />
    case 'investments':
      return <Icon name="stocks" />
    case 'stocks':
      return <Icon name="users" />
    case 'bitcoin':
      return <Icon name="bitcoin" />
    case 'bank':
      return <Icon name="card" />
    case 'youtube':
      return <Icon name="yt" />
    case 'other':
      return <Icon name="piggy" />
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
