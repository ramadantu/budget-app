import StyledButton from '../../styles/Button'

interface ButtonProps {
  name?: string
  icon: React.ReactNode
  onClick?: () => void
  bg: string
  bPad: string
  color: string
  bRad: string
}

function Button({ name, icon, onClick, bg, bPad, color, bRad }: ButtonProps) {
  return (
    <StyledButton
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </StyledButton>
  )
}

export default Button
