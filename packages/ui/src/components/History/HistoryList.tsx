import { JSX } from 'react'

import { dateFormat } from '../../utils/dateFormat'
import { ExpenseCategory, IncomeCategory, Transaction } from '../../utils/types'
import { HistoryListItem } from '../../styles/History'

import Button from '../Button'
import Icon from '../Icon'

interface HistoryListProps {
  transactions: Transaction[]
  deleteExpense?: ((id: string) => Promise<void>) | undefined
  deleteIncome?: ((id: string) => Promise<void>) | undefined
  getExpensesCategoriesIcon?: (category: ExpenseCategory | null) => JSX.Element | null
  getIncomeCategoriesIcon?: (category: IncomeCategory | null) => JSX.Element | null
}

function HistoryList({
  transactions,
  deleteExpense,
  deleteIncome,
  getExpensesCategoriesIcon,
  getIncomeCategoriesIcon,
}: HistoryListProps) {
  // const ctxResponse = useGlobalContext()

  return (
    <div className="incomes">
      {transactions.map(({ id, title, amount, date, category, description, type }) => {
        return (
          <HistoryListItem $background={'var(--color-green)'} key={id}>
            <div className="icon">
              {type === 'expenses'
                ? getExpensesCategoriesIcon?.(category)
                : getIncomeCategoriesIcon?.(category)}
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
                    icon={<Icon name="trash" />}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'var(--primary-color'}
                    color={'#fff'}
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
