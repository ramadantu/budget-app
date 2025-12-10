import { useWindowSize } from '../../utils/useWindowSize'

import { OrbStyled } from './StyledOrb'

function Orb() {
  const { width, height } = useWindowSize()

  return <OrbStyled width={width} height={height} />
}

export default Orb
