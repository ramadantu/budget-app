import { useState } from 'react'

import DatePicker from 'react-datepicker'

import StyledForm from '../../styles/Form'
import { Expense, expensesCategories, Income } from '../../utils/types'

import Dropdown from '../Dropdown'
import Button from '../Button'

interface FormProps {
  onSubmit?: ((data: Income | Expense) => Promise<void>) | undefined
  error?: string | undefined
  setError?: ((error: string) => void) | undefined
}

function Form({ onSubmit, error, setError }: FormProps) {
  const [inputState, setInputState] = useState({
    title: '',
    amount: 0,
    date: new Date(),
    category: '',
    description: '',
  })

  const handleInput =
    (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setInputState({ ...(inputState ?? {}), [name]: e.target.value })
      setError?.('')
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (inputState) {
      e.preventDefault()
      onSubmit?.({
        id: 1,
        title: inputState.title,
        amount: inputState.amount,
        date: inputState.date,
        category: inputState.category,
        description: inputState.description,
      })
      setInputState({
        title: '',
        amount: 0,
        date: new Date(),
        category: '',
        description: '',
      })
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
          onChange={(date) =>
            inputState && setInputState({ ...inputState, date: date ?? new Date() })
          }
        />
      </div>
      <Dropdown
        placeholder="Select Category"
        // TODO: fix options based on transaction type
        options={expensesCategories}
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
          // TODO: fix button text based on transaction type
          text={`Add Expenses`}
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
