import { useEffect } from 'react'

import { Form, HistoryList } from '@budget-app/ui'

import { useGlobalContext } from '../context/globalContext'

export default function ExpensesPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getExpenses()
  }, [])

  return (
    <div>
      <h1>Expenses</h1>
      <h2 className="total-container">
        Total Expenses: <span>${ctxResponse?.totalExpenses()}</span>
      </h2>
      <div className="content">
        <div>
          <Form
            onSubmit={ctxResponse?.addExpense}
            error={ctxResponse?.error ?? ''}
            setError={ctxResponse?.setError}
          />
        </div>
        <HistoryList
          transactions={ctxResponse?.expenses ?? []}
          onDelete={ctxResponse?.deleteExpense}
        />
      </div>
    </div>
  )
}
