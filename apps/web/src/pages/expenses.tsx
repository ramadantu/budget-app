import { useEffect } from 'react'

import { Form, HistoryList } from '@budget-app/ui'

import ExpensesStyled, { getExpensesCategoriesIcon } from '../modules/pages/Expenses'
import Layout from '../modules/Layout'
import InnerLayout from '../components/Layout'
import { useGlobalContext } from '../context/globalContext'

export default function ExpensesPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getExpenses()
  }, [])

  return (
    <Layout>
      <ExpensesStyled>
        <InnerLayout>
          <h1>Expenses</h1>
          <h2 className="total-income">
            Total Expenses: <span>${ctxResponse?.totalExpenses()}</span>
          </h2>
          <div className="income-content">
            <div className="form-container">
              <Form
                type={'Expenses'}
                addExpense={ctxResponse?.addExpense}
                error={ctxResponse?.error ?? ''}
                setError={ctxResponse?.setError}
              />
            </div>
            <HistoryList
              transactions={ctxResponse?.expenses ?? []}
              deleteExpense={ctxResponse?.deleteExpense}
              getExpensesCategoriesIcon={getExpensesCategoriesIcon}
            />
          </div>
        </InnerLayout>
      </ExpensesStyled>
    </Layout>
  )
}
