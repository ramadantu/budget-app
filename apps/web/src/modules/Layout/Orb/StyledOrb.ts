import styled, { keyframes } from "styled-components"

interface OrbStyledProps {
  width?: number | undefined
  height?: number | undefined
}

const moveOrb = ({ width, height }: OrbStyledProps) =>
  keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${(height ?? 0) / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

export const OrbStyled = styled.div<OrbStyledProps>`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
  filter: blur(400px);
  animation: ${(props) => moveOrb(props)} 15s alternate linear infinite;
`