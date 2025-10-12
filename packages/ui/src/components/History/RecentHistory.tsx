import { RecentHistory as RecentHistoryStyled } from './StyledRecentHistory'
import { useGlobalContext } from '../../context/globalContext'

function RecentHistory() {
  const ctxResponse = useGlobalContext()

  const history = ctxResponse?.transactionHistory()

  return (
    <RecentHistoryStyled>
      <h2>Recent History</h2>
      {history?.map((item) => {
        const { _id, title, amount, type } = item
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)',
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)',
              }}
            >
              {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        )
      })}
    </RecentHistoryStyled>
  )
}

export default RecentHistory
