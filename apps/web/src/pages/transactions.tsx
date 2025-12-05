import { useEffect } from 'react'

import { Chart, Icon, TransactionsHistory } from '@budget-app/ui'

import Layout from '../modules/Layout'
import { useGlobalContext } from '../context/globalContext'
import InnerLayout from '../components/Layout'
import TransactionsStyled from '../modules/pages/Transactions'

export default function TransactionsPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
    ctxResponse?.getExpenses()
  }, [])

  const dollar = <Icon name="dollar" />

  return (
    <Layout>
      <TransactionsStyled>
        <InnerLayout>
          <h1>All Transactions</h1>
          <div className="stats-con">
            <div className="chart-con">
              <Chart incomes={ctxResponse?.incomes} expenses={ctxResponse?.expenses} />
              <div className="amount-con">
                <div className="income">
                  <h2>Total Incomes</h2>
                  <p>
                    {dollar} {ctxResponse?.totalIncomes()}
                  </p>
                </div>
                <div className="expense">
                  <h2>Total Expenses</h2>
                  <p>
                    {dollar} {ctxResponse?.totalExpenses()}
                  </p>
                </div>
                <div className="balance">
                  <h2>Total Balance</h2>
                  <p>
                    {dollar} {ctxResponse?.totalBalance()}
                  </p>
                </div>
              </div>
            </div>
            <div className="history-con">
              <TransactionsHistory transactions={ctxResponse?.transactionHistory()} />
              <h2 className="salary-title">
                Min <span>Income</span>Max
              </h2>
              {ctxResponse && (
                <div className="salary-item">
                  <p>${Math.min(...ctxResponse.incomes.map((item) => item.amount || 0))}</p>
                  <p>${Math.max(...ctxResponse.incomes.map((item) => item.amount || 0))}</p>
                </div>
              )}
              <h2 className="salary-title">
                Min <span>Expense</span>Max
              </h2>
              {ctxResponse && (
                <div className="salary-item">
                  <p>${Math.min(...ctxResponse.expenses.map((item) => item.amount || 0))}</p>
                  <p>${Math.max(...ctxResponse.expenses.map((item) => item.amount || 0))}</p>
                </div>
              )}
            </div>
          </div>
        </InnerLayout>
      </TransactionsStyled>
    </Layout>
  )
}
