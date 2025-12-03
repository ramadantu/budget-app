import { useEffect } from 'react'

import IncomeStyled from '../modules/pages/Incomes'
import Layout from '../modules/Layout'
import { useGlobalContext } from '../context/globalContext'
import InnerLayout from '../components/Layout'
import Form from '../components/Form'
import { HistoryList } from '../components/History'

export default function IncomesPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
  }, [])

  return (
    <Layout>
      <IncomeStyled>
        <InnerLayout>
          <h1>Incomes</h1>
          <h2 className="total-income">
            Total Incomes: <span>${ctxResponse?.totalIncomes()}</span>
          </h2>
          <div className="income-content">
            <div className="form-container">
              <Form type={'Incomes'} />
            </div>
            <HistoryList list={ctxResponse?.incomes ?? []} />
          </div>
        </InnerLayout>
      </IncomeStyled>
    </Layout>
  )
}
