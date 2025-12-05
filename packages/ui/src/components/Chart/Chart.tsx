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

import { dateFormat } from '../../utils/dateFormat'
import StyledChart from '../../styles/Chart'
import { Expense, Income } from '../../utils/types'

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

interface ChartProps {
  incomes?: Income[] | null | undefined
  expenses?: Expense[] | null | undefined
}

function Chart({ incomes, expenses }: ChartProps) {
  const data =
    incomes && expenses
      ? {
          labels: incomes.map((income) => {
            const { date } = income
            return dateFormat(date ?? new Date(Date.now()))
          }),
          datasets: [
            {
              label: 'Income',
              data: [
                ...incomes.map((income) => {
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
                ...expenses.map((expense) => {
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

  return <StyledChart>{data && <Line data={data} />}</StyledChart>
}

export default Chart
