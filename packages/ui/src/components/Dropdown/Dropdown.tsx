export interface DropdownProps {
  placeholder: string
  options: readonly string[]
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
  selectedOption?: string | null
}

export default function Dropdown({
  placeholder,
  options,
  selectedOption,
  handleSelect,
}: DropdownProps) {
  return (
    <div className="selects input-control">
      <select
        required
        value={selectedOption ?? ''}
        name="option"
        id="option"
        onChange={handleSelect}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
