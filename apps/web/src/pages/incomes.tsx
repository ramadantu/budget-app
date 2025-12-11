import { useEffect } from 'react'

import { Form, HistoryList } from '@budget-app/ui'

import { useGlobalContext } from '../context/globalContext'

export default function IncomesPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
  }, [])

  return (
    <div>
      <h1>Incomes</h1>
      <h2 className="total-container">
        Total Incomes: <span>${ctxResponse?.totalIncomes()}</span>
      </h2>
      <div className="content">
        <div>
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
    </div>
  )
}
