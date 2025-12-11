import { useEffect } from 'react'

import { Chart, Icon, TransactionsHistory } from '@budget-app/ui'

import { useGlobalContext } from '../context/globalContext'
import StyledDashboard from '../styles/StyledDashboard'

export default function DashboardPage() {
  const ctxResponse = useGlobalContext()

  useEffect(() => {
    ctxResponse?.getIncomes()
    ctxResponse?.getExpenses()
  }, [])

  const dollar = <Icon name="dollar" />

  const incomesAmounts =
    ctxResponse && ctxResponse.incomes.length > 0
      ? ctxResponse.incomes.map((item) => item.amount ?? 0)
      : [0]
  const expensesAmounts =
    ctxResponse && ctxResponse.expenses.length > 0
      ? ctxResponse.expenses.map((item) => item.amount ?? 0)
      : [0]

  const minIncome = Math.min(...incomesAmounts)
  const maxIncome = Math.max(...incomesAmounts)
  const minExpense = Math.min(...expensesAmounts)
  const maxExpense = Math.max(...expensesAmounts)

  return (
    <StyledDashboard>
      <h1>All Transactions</h1>
      <div className="stats-con">
        <div className="chart-con">
          <Chart incomes={ctxResponse?.incomes} expenses={ctxResponse?.expenses} />
          <div className="amount-con">
            <div className="income">
              <h2>Total Incomes</h2>
              <p>
                {dollar} {ctxResponse?.totalIncomes() ?? 0}
              </p>
            </div>
            <div className="expense">
              <h2>Total Expenses</h2>
              <p>
                {dollar} {ctxResponse?.totalExpenses() ?? 0}
              </p>
            </div>
            <div className="balance">
              <h2>Total Balance</h2>
              <p>
                {dollar} {ctxResponse?.totalBalance() ?? 0}
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
              <p>${minIncome}</p>
              <p>${maxIncome}</p>
            </div>
          )}
          <h2 className="salary-title">
            Min <span>Expense</span>Max
          </h2>
          {ctxResponse && (
            <div className="salary-item">
              <p>${minExpense}</p>
              <p>${maxExpense}</p>
            </div>
          )}
        </div>
      </div>
    </StyledDashboard>
  )
}
