import { useState } from 'react'
import { Form as FormStyled } from './StyledForm'
import DatePicker from 'react-datepicker'

import { Expense, Income, useGlobalContext } from '../../context/globalContext'
import { plus } from '../../utils/Icons'
import { ExpensesCategories, type ExpensesCategory } from '../../modules/pages/Expenses'
import { IncomeCategories, type IncomesCategory } from '../../modules/pages/Incomes'

import Button from '../Button'
interface FormProps {
  type: 'Incomes' | 'Expenses'
}

function Form({ type }: FormProps) {
  const ctxResponse = useGlobalContext()
  const [inputState, setInputState] = useState<{
    title: string
    amount: string
    date: Date | null
    category: string
    description: string
  }>({
    title: '',
    amount: '',
    date: null,
    category: '',
    description: '',
  })

  const { title, amount, date, category, description } = inputState

  const handleInput =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setInputState({ ...inputState, [name]: e.target.value })
      ctxResponse?.setError('')
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    type === 'Expenses' ? ctxResponse?.addExpense(inputState) : ctxResponse?.addIncome(inputState)
    setInputState({
      title: '',
      amount: '',
      date: null,
      category: '',
      description: '',
    })
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      {ctxResponse?.error && <p className="error">{ctxResponse?.error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={'title'}
          placeholder={`${type} Title`}
          onChange={handleInput('title')}
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={'amount'}
          placeholder={`${type} Amount`}
          onChange={handleInput('amount')}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date ?? new Date() })
          }}
        />
      </div>
      {type === 'Expenses' ? (
        <ExpensesCategories category={category as ExpensesCategory} handleInput={handleInput} />
      ) : (
        <IncomeCategories category={category as IncomesCategory} handleInput={handleInput} />
      )}
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add a description"
          id="description"
          cols={30}
          rows={4}
          onChange={handleInput('description')}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={`Add ${type}`}
          icon={plus}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        />
      </div>
    </FormStyled>
  )
}

export default Form
