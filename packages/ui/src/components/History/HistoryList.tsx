import { dateFormat } from '../../utils/dateFormat'
import { EXPENSES_CATEGORY_ICON_MAP, Transaction } from '../../utils/types'
import { HistoryListItem } from '../../styles/History'

import Button from '../Button'
import Icon from '../Icon'

interface HistoryListProps {
  transactions: Transaction[]
  onDelete?: ((id: number) => Promise<void>) | undefined
}

function HistoryList({ transactions, onDelete }: HistoryListProps) {
  return (
    <div className="list-container">
      {transactions.map(({ id, title, amount, date, category, description }) => {
        return (
          <HistoryListItem $background={'var(--color-green)'} key={id}>
            <div className="icon">
              {category && <Icon name={EXPENSES_CATEGORY_ICON_MAP[category] ?? 'circle'} />}
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
                    onClick={() => onDelete?.(id)}
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
