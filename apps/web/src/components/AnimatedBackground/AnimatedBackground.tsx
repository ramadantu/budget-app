import { useWindowSize } from '../../utils/useWindowSize'
import StyledAnimatedBackground from '../../styles/StyledAnimatedBackground'

export default function AnimatedBackground() {
  const { width, height } = useWindowSize()

  return <StyledAnimatedBackground width={width} height={height} />
}
