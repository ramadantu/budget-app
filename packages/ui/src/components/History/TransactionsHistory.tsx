import StyledHistory from '../../styles/History'
import { Transaction } from '../../utils/types'

interface TransactionsHistoryProps {
  transactions?: Transaction[] | null | undefined
}

function TransactionsHistory({ transactions }: TransactionsHistoryProps) {
  return (
    <StyledHistory>
      <h2>Recent History</h2>
      {transactions?.map((transaction) => {
        const { id, title, amount, type } = transaction
        return (
          <div key={id} className="history-item">
            <p
              style={{
                color: type === 'expenses' ? 'red' : 'var(--color-green)',
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === 'expenses' ? 'red' : 'var(--color-green)',
              }}
            >
              {type === 'expenses'
                ? `-${!amount || amount <= 0 ? 0 : amount}`
                : `+${!amount || amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        )
      })}
    </StyledHistory>
  )
}

export default TransactionsHistory
