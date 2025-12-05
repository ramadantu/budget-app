import { useEffect } from 'react'

import { Form, HistoryList } from '@budget-app/ui'

import IncomeStyled, { getIncomeCategoriesIcon } from '../modules/pages/Incomes'
import Layout from '../modules/Layout'
import { useGlobalContext } from '../context/globalContext'
import InnerLayout from '../components/Layout'

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
              getIncomeCategoriesIcon={getIncomeCategoriesIcon}
            />
          </div>
        </InnerLayout>
      </IncomeStyled>
    </Layout>
  )
}
