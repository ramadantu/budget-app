import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

import axios from 'axios'

import { ExpensesCategory, IncomesCategory } from '@budget-app/ui'

const BASE_URL = 'http://localhost:5001/api/v1/'

export type Income = {
  id: string
  title: string
  amount: number | null
  date: Date | null
  category: IncomesCategory | null
  description: string
  createdAt: Date
  type: 'incomes'
}

export type Expense = {
  id: string
  title: string
  amount: number | null
  date: Date | null
  category: ExpensesCategory | null
  description: string
  createdAt: Date
  type: 'expenses'
}

interface GlobalContextProps {
  addIncome: (income: Income) => Promise<void>
  getIncomes: () => Promise<void>
  incomes: Income[]
  deleteIncome: (id: string) => Promise<void>
  expenses: Expense[]
  totalIncomes: () => number
  addExpense: (expense: Expense) => Promise<void>
  getExpenses: () => Promise<void>
  deleteExpense: (id: string) => Promise<void>
  totalExpenses: () => number
  totalBalance: () => number
  transactionHistory: () => (Income | Expense)[]
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
    setIncomes(response.data.map((income: Income) => ({ ...income, type: 'incomes' })))
  }

  const addIncome = async (income: Income) => {
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
    incomes.forEach((income: Income) => {
      totalIncomes = totalIncomes + (income.amount ?? 0)
    })

    return totalIncomes
  }

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data.map((expense: Expense) => ({ ...expense, type: 'expenses' })))
  }

  const addExpense = async (expense: Expense) => {
    await axios.post(`${BASE_URL}add-expense`, expense).catch((err) => {
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
    expenses.forEach((expense: Expense) => {
      totalExpenses = totalExpenses + (expense.amount ?? 0)
    })

    return totalExpenses
  }

  const totalBalance = () => {
    return totalIncomes() - totalExpenses()
  }

  const transactionHistory = () => {
    return [...incomes, ...expenses]
      .sort((a: Income | Expense, b: Income | Expense) => {
        return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
      })
      .slice(0, 3)
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
