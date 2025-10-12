import { Button as ButtonStyled } from './SyledButton'

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
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
        width: '50%',
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  )
}

export default Button
