import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import axios from 'axios'

const BASE_URL = process.env.BACKEND_URL

interface GlobalContextProps {
  addIncome: (income: any) => Promise<void>
  getIncomes: () => Promise<void>
  incomes: any[]
  deleteIncome: (id: string) => Promise<void>
  expenses: any[]
  totalIncomes: () => number
  addExpense: (expense: any) => Promise<void>
  getExpenses: () => Promise<void>
  deleteExpense: (id: string) => Promise<void>
  totalExpenses: () => number
  totalBalance: () => number
  transactionHistory: () => any[]
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>
}

const GlobalContext = createContext<GlobalContextProps | null>(null)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState<string | null>(null)

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data.map((income: any) => ({ ...income, type: 'incomes' })))
  }

  const addIncome = async (income: any) => {
    await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
      setError(err.response.data.message)
    })
    getIncomes()
  }

  const deleteIncome = async (id: string) => {
    await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes()
  }

  const totalIncomes = () => {
    let totalIncomes = 0
    incomes.forEach((income: any) => {
      totalIncomes = totalIncomes + income.amount
    })

    return totalIncomes
  }

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data.map((expense: any) => ({ ...expense, type: 'expenses' })))
  }

  const addExpense = async (income: any) => {
    await axios.post(`${BASE_URL}add-expense`, income).catch((err) => {
      setError(err.response.data.message)
    })
    getExpenses()
  }

  const deleteExpense = async (id: string) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
  }

  const totalExpenses = () => {
    let totalExpenses = 0
    expenses.forEach((expense: any) => {
      totalExpenses = totalExpenses + expense.amount
    })

    return totalExpenses
  }

  const totalBalance = () => {
    return totalIncomes() - totalExpenses()
  }

  const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a: any, b: any) => {
      return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    })

    return history.slice(0, 3)
  }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncomes,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
