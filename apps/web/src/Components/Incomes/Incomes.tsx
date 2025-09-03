import { useEffect } from 'react'
import { Income as IncomeStyled } from './StyledIncome'
import { useGlobalContext } from '../../context/globalContext'
import { InnerLayout } from '../Layout/StyledInner'
import Form from '../Form/Form'
import HistoryList from '../History/HistoryList'

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
          <HistoryList list={ctxResponse?.incomes ?? []} />
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

export default Incomes
