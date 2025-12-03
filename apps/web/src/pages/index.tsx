import { useEffect } from 'react'

import { useGlobalContext } from '../context/globalContext'
import Layout from '../modules/Layout'
import DashboardStyled from '../modules/pages/Dashboard'
import InnerLayout from '../components/Layout'
import Chart from '../components/Chart'
import { dollar } from '../utils/Icons'
import RecentHistory from '../components/History'

export default function DashboardPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
    ctxResponse?.getExpenses()
  }, [])

  return (
    <Layout>
      <DashboardStyled>
        <InnerLayout>
          <h1>All Transactions</h1>
          <div className="stats-con">
            <div className="chart-con">
              <Chart />
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
              <RecentHistory />
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
      </DashboardStyled>
    </Layout>
  )
}
