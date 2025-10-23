import { useEffect } from 'react'
import { Expenses as ExpensesStyled } from './StyledExpenses'
import { useGlobalContext } from '../../context/globalContext'
import { InnerLayout } from '../Layout/StyledInner'
import Form from '../Form/Form'
import HistoryList from '../History/HistoryList'

function Expenses() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getExpenses()
  }, [])
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expenses: <span>${ctxResponse?.totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form type={'Expenses'} />
          </div>
          <HistoryList list={ctxResponse?.expenses ?? []} type={'expenses'} />
        </div>
      </InnerLayout>
    </ExpensesStyled>
  )
}

export default Expenses
