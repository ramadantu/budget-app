import { useEffect } from 'react'

import { Form, HistoryList } from '@budget-app/ui'

import StyledIncome from '../styles/StyledIncome'
import { useGlobalContext } from '../context/globalContext'

export default function IncomesPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
  }, [])

  return (
    <StyledIncome>
      <h1>Incomes</h1>
      <h2 className="total-income">
        Total Incomes: <span>${ctxResponse?.totalIncomes()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <Form
            type={'Incomes'}
            addIncome={ctxResponse?.addIncome}
            error={ctxResponse?.error ?? ''}
            setError={ctxResponse?.setError}
          />
        </div>
        <HistoryList
          transactions={ctxResponse?.incomes ?? []}
          deleteIncome={ctxResponse?.deleteIncome}
        />
      </div>
    </StyledIncome>
  )
}
