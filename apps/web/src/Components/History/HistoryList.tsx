import { ListItem as StyledListItem } from './StyledListItem'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import { calendar, comment, dollar, trash } from '../../utils/Icons'
import Button from '../Button/Button'
import { getExpensesCategoriesIcon } from '../../modules/pages/Expenses'
import { getIncomeCategoriesIcon } from '../../modules/pages/Incomes'

interface HistoryListProps {
  type: 'incomes' | 'expenses'
  list: any[]
}

function HistoryList({ list, type }: HistoryListProps) {
  const ctxResponse = useGlobalContext()

  return (
    <div className="incomes">
      {list.map(({ id, title, amount, date, category, description }) => {
        return (
          <StyledListItem $background={'var(--color-green)'} key={id}>
            <div className="icon">
              {type === 'expenses'
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
                    {calendar} {dateFormat(date)}
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
                      type === 'expenses'
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
