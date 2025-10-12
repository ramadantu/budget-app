import { useEffect } from 'react'
import { Dashboard as DashboardStyled } from './StyledDashboard'
import { useGlobalContext } from '../../context/globalContext'
import RecentHistory from '../History/RecentHistory'
import InnerLayout from '../Layout/StyledInner'
import { dollar } from '../../utils/Icons'
import Chart from '../Chart/Chart'

function Dashboard() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
    ctxResponse?.getExpenses()
  }, [])

  return (
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
                <p>${Math.min(...ctxResponse.incomes.map((item) => item.amount))}</p>
                <p>${Math.max(...ctxResponse.incomes.map((item) => item.amount))}</p>
              </div>
            )}
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            {ctxResponse && (
              <div className="salary-item">
                <p>${Math.min(...ctxResponse.expenses.map((item) => item.amount))}</p>
                <p>${Math.max(...ctxResponse.expenses.map((item) => item.amount))}</p>
              </div>
            )}
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

export default Dashboard
