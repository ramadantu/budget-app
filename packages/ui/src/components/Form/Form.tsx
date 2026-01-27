import { useState } from 'react'

import DatePicker from 'react-datepicker'

import StyledForm from '../../styles/Form'
import { Expense, ExpensesCategory, Income, IncomesCategory } from '../../utils/types'

import Dropdown from '../Dropdown'
import Button from '../Button'

interface FormProps {
  onSubmit?: ((data: Income | Expense) => Promise<void>) | undefined
  error?: string | undefined
  setError?: ((error: string) => void) | undefined
  confirmButtonText?: string | undefined
  categoryList?: readonly ExpensesCategory[] | readonly IncomesCategory[] | undefined
}

const DEFAULT_INPUT_STATE: {
  title: string | null
  amount: number | null
  date: Date | null
  category: string | null
  description: string | null
} = {
  title: null,
  amount: null,
  date: null,
  category: null,
  description: null,
}

function Form({ onSubmit, error, setError, confirmButtonText, categoryList }: FormProps) {
  const [inputState, setInputState] = useState(DEFAULT_INPUT_STATE)

  const handleInput =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (inputState) setInputState({ ...(inputState ?? {}), [name]: e.target.value })
      setError?.('')
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (inputState) {
      e.preventDefault()
      onSubmit?.({
        id: 1,
        title: inputState.title ?? '',
        amount: inputState.amount ?? 0,
        date: inputState.date ?? new Date(),
        category: inputState.category ?? '',
        description: inputState.description,
      })
      setInputState(DEFAULT_INPUT_STATE)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <div className="input-control">
        <input
          type="text"
          value={inputState?.title ?? ''}
          name={'title'}
          placeholder={`Title`}
          onChange={handleInput('title')}
        />
      </div>

      <div className="input-control">
        <input
          value={inputState?.amount ?? ''}
          type="text"
          name={'amount'}
          placeholder={`Amount`}
          onChange={handleInput('amount')}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a date"
          selected={inputState?.date ?? null}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setInputState({ ...inputState, date })}
        />
      </div>

      <Dropdown
        placeholder="Select Category"
        options={categoryList ?? []}
        selectedOption={inputState?.category ?? null}
        handleSelect={handleInput('category')}
      />

      <div className="input-control">
        <textarea
          name="description"
          value={inputState?.description ?? ''}
          placeholder="Description"
          id="description"
          cols={30}
          rows={4}
          onChange={handleInput('description')}
        ></textarea>
      </div>

      <div className="submit-btn">
        <Button
          text={confirmButtonText ?? `Add`}
          iconName="plus"
          color={'var(--color-accent, inherit)'}
          textColor={'#fff'}
          padding={'.8rem 1.6rem'}
          borderRadius={'30px'}
        />
      </div>
    </StyledForm>
  )
}

export default Form
