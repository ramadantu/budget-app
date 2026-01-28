import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

import axios from 'axios'

import { Incomes, Expenses } from '@budget-app/prisma'

const BASE_URL = 'http://localhost:5001/api/v1/'

interface GlobalContextProps {
  addIncome: (income: Incomes) => Promise<void>
  getIncomes: () => Promise<void>
  incomes: Incomes[]
  deleteIncome: (id: number) => Promise<void>
  expenses: Expenses[]
  totalIncomes: () => number
  addExpense: (expense: Expenses) => Promise<void>
  getExpenses: () => Promise<void>
  deleteExpense: (id: number) => Promise<void>
  totalExpenses: () => number
  totalBalance: () => number
  transactionHistory: () => (Incomes | Expenses)[]
  error: string | null
  setError: Dispatch<SetStateAction<string | null>>
}

const GlobalContext = createContext<GlobalContextProps | null>(null)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [incomes, setIncomes] = useState<Incomes[]>([])
  const [expenses, setExpenses] = useState<Expenses[]>([])
  const [error, setError] = useState<string | null>(null)

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data)
  }

  const addIncome = async (income: Incomes) => {
    await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
      setError(err.response.data.message)
    })
    getIncomes()
  }

  const deleteIncome = async (id: number) => {
    await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes()
  }

  const totalIncomes = () => {
    let totalIncomes = 0
    incomes.forEach((income: Incomes) => {
      totalIncomes = totalIncomes + (income.amount ?? 0)
    })

    return totalIncomes
  }

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data.map((expense: Expenses) => ({ ...expense, type: 'expenses' })))
  }

  const addExpense = async (expense: Expenses) => {
    await axios.post(`${BASE_URL}add-expense`, expense).catch((err) => {
      setError(err.response.data.message)
    })
    getExpenses()
  }

  const deleteExpense = async (id: number) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
  }

  const totalExpenses = () => {
    let totalExpenses = 0
    expenses.forEach((expense: Expenses) => {
      totalExpenses = totalExpenses + (expense.amount ?? 0)
    })

    return totalExpenses
  }

  const totalBalance = () => {
    return totalIncomes() - totalExpenses()
  }

  const transactionHistory = () => {
    return [...incomes, ...expenses]
      .sort((a: Incomes | Expenses, b: Incomes | Expenses) => {
        return Number(new Date(b.date)) - Number(new Date(a.date))
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
