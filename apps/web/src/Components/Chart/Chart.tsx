import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

import { Chart as ChartStyled } from './StyledChart'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

function Chart() {
  const ctxResponse = useGlobalContext()

  const data = ctxResponse
    ? {
        labels: ctxResponse?.incomes.map((income) => {
          const { date } = income
          return dateFormat(date ?? new Date(Date.now()))
        }),
        datasets: [
          {
            label: 'Income',
            data: [
              ...ctxResponse.incomes.map((income) => {
                const { amount } = income
                return amount
              }),
            ],
            backgroundColor: 'green',
            tension: 0.2,
          },
          {
            label: 'Expense',
            data: [
              ...ctxResponse.expenses.map((expense) => {
                const { amount } = expense
                return amount
              }),
            ],
            backgroundColor: 'red',
            tension: 0.2,
          },
        ],
      }
    : null

  return <ChartStyled>{data && <Line data={data} />}</ChartStyled>
}

export default Chart
