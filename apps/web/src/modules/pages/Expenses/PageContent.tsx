import { useEffect } from 'react'

import { InnerLayout } from '../../../Components/Layout/StyledInner'
import Form from '../../../Components/Form/Form'
import HistoryList from '../../../Components/History/HistoryList'
import { useGlobalContext } from '../../../context/globalContext'

import { Expenses as ExpensesStyled } from './StyledExpenses'

export default function Expenses() {
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
