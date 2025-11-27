import { useEffect } from 'react'

import { InnerLayout } from '../../../Components/Layout/StyledInner'
import Form from '../../../Components/Form/Form'
import HistoryList from '../../../Components/History/HistoryList'
import { useGlobalContext } from '../../../context/globalContext'

import { Income as IncomeStyled } from './StyledIncome'

function Incomes() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
  }, [])
  return (
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
          <HistoryList list={ctxResponse?.incomes ?? []} type={'incomes'} />
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

export default Incomes
