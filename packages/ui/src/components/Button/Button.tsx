import StyledButton from '../../styles/Button'

import Icon, { IconName } from '../Icon'

interface ButtonProps {
  text?: string
  color?: string
  textColor?: string
  borderRadius?: string
  padding?: string
  iconName?: IconName
  onClick?: () => void
}

function Button(props: ButtonProps) {
  return (
    <StyledButton
      style={{
        backgroundColor: props.color,
        padding: props.padding,
        borderRadius: props.borderRadius,
        color: props.textColor,
      }}
      onClick={props.onClick}
    >
      {props.iconName && <Icon name={props.iconName} />}
      {props.text}
    </StyledButton>
  )
}

export default Button
