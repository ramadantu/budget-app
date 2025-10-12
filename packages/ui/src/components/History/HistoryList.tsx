import { ListItem as StyledListItem } from './StyledListItem'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import { calender, comment, dollar, trash } from '../../utils/Icons'
import Button from '../Button/Button'
import { getExpensesCategoriesIcon } from '../Expenses/ExpensesCategories'
import { getIncomeCategoriesIcon } from '../Incomes/IncomeCategories'

interface HistoryListProps {
  list: any[]
}

function HistoryList({ list }: HistoryListProps) {
  const ctxResponse = useGlobalContext()

  return (
    <div className="incomes">
      {list.map(({ _id: id, title, amount, date, category, description, type }) => {
        return (
          <StyledListItem indicator={'var(--color-green)'}>
            <div className="icon">
              {type === 'expense'
                ? getExpensesCategoriesIcon(category)
                : getIncomeCategoriesIcon(category)}
            </div>
            <div className="content">
              <h5>{title}</h5>
              <div className="inner-content">
                <div className="text">
                  <p>
                    {dollar} {amount}
                  </p>
                  <p>
                    {calender} {dateFormat(date)}
                  </p>
                  <p>
                    {comment}
                    {description}
                  </p>
                </div>
                <div className="btn-con">
                  <Button
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'var(--primary-color'}
                    color={'#fff'}
                    onClick={() =>
                      type === 'expense'
                        ? ctxResponse?.deleteExpense(id)
                        : ctxResponse?.deleteIncome(id)
                    }
                  />
                </div>
              </div>
            </div>
          </StyledListItem>
        )
      })}
    </div>
  )
}

export default HistoryList
