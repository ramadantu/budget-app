import { useEffect } from 'react'

import ExpensesStyled from '../modules/pages/Expenses'
import Layout from '../modules/Layout'
import InnerLayout from '../components/Layout'
import { useGlobalContext } from '../context/globalContext'
import Form from '../components/Form'
import { HistoryList } from '../components/History'

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
              <Form type={'Expenses'} />
            </div>
            <HistoryList list={ctxResponse?.expenses ?? []} />
          </div>
        </InnerLayout>
      </ExpensesStyled>
    </Layout>
  )
}
