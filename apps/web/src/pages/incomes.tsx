import { useEffect } from 'react'

import { Form, HistoryList, incomesCategories } from '@budget-app/ui'

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
            onSubmit={ctxResponse?.addIncome}
            error={ctxResponse?.error ?? ''}
            setError={ctxResponse?.setError}
            confirmButtonText="Add Income"
            categoryList={incomesCategories}
          />
        </div>
        <HistoryList
          transactions={ctxResponse?.incomes ?? []}
          onDelete={ctxResponse?.deleteIncome}
        />
      </div>
    </div>
  )
}
