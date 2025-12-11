import { dateFormat } from '../../utils/dateFormat'
import {
  EXPENSES_CATEGORY_ICON_MAP,
  INCOMES_CATEGORY_ICON_MAP,
  Transaction,
} from '../../utils/types'
import { HistoryListItem } from '../../styles/History'

import Button from '../Button'
import Icon from '../Icon'

interface HistoryListProps {
  transactions: Transaction[]
  deleteExpense?: ((id: string) => Promise<void>) | undefined
  deleteIncome?: ((id: string) => Promise<void>) | undefined
}

function HistoryList({ transactions, deleteExpense, deleteIncome }: HistoryListProps) {
  return (
    <div className="list-container">
      {transactions.map(({ id, title, amount, date, category, description, type }) => {
        return (
          <HistoryListItem $background={'var(--color-green)'} key={id}>
            <div className="icon">
              {type === 'expenses' && category && (
                <Icon name={EXPENSES_CATEGORY_ICON_MAP[category]} />
              )}
              {type === 'incomes' && category && (
                <Icon name={INCOMES_CATEGORY_ICON_MAP[category]} />
              )}
            </div>
            <div className="content">
              <h5>{title}</h5>
              <div className="inner-content">
                <div className="text">
                  <p>
                    <Icon name="dollar" />
                    {amount}
                  </p>
                  <p>
                    <Icon name="calendar" />
                    {dateFormat(date ?? new Date(Date.now()))}
                  </p>
                  <p>
                    <Icon name="comment" />
                    {description}
                  </p>
                </div>
                <div className="btn-con">
                  <Button
                    iconName="trash"
                    color={'var(--primary-color, inherit)'}
                    textColor={'#fff'}
                    padding={'1rem'}
                    borderRadius={'50%'}
                    onClick={() => (type === 'expenses' ? deleteExpense?.(id) : deleteIncome?.(id))}
                  />
                </div>
              </div>
            </div>
          </HistoryListItem>
        )
      })}
    </div>
  )
}

export default HistoryList
