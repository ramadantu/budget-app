import { useState } from 'react'

import DatePicker from 'react-datepicker'

import StyledForm from '../../styles/Form'
import { Expense, Income } from '../../utils/types'

import Button from '../Button'
import Icon from '../Icon'

interface FormProps {
  type: 'Incomes' | 'Expenses'
  addIncome?: ((income: Income) => Promise<void>) | undefined
  addExpense?: ((expense: Expense) => Promise<void>) | undefined
  error?: string | undefined
  setError?: ((error: string) => void) | undefined
}

function Form({ type, addIncome, addExpense, error, setError }: FormProps) {
  const [inputState, setInputState] = useState<Expense | Income>({
    id: '',
    title: '',
    amount: null,
    date: null,
    category: null,
    description: '',
    createdAt: new Date(),
    type: type.toLowerCase() as Expense['type'] | Income['type'],
  })

  const { title, amount, date, description } = inputState

  const handleInput =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setInputState({ ...inputState, [name]: e.target.value })
      setError?.('')
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputState.type === 'expenses') {
      addExpense?.(inputState)
    } else {
      addIncome?.(inputState)
    }

    setInputState({
      id: '',
      title: '',
      amount: null,
      date: null,
      category: null,
      description: '',
      createdAt: new Date(),
      type: type.toLowerCase() as Expense['type'] | Income['type'],
    })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
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
          value={amount ?? undefined}
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
      {/* {type === 'Expenses' ? (
        <ExpensesCategories category={category} handleInput={handleInput} />
      ) : (
        <IncomesCategories category={category} handleInput={handleInput} />
      )} */}
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
          icon={<Icon name="plus" />}
          bPad={'.8rem 1.6rem'}
          bRad={'30px'}
          bg={'var(--color-accent'}
          color={'#fff'}
        />
      </div>
    </StyledForm>
  )
}

export default Form
