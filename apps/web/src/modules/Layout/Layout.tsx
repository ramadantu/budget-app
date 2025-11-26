import { useMemo } from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import styled from 'styled-components'

import Nav from '../Nav'
import { GlobalProvider } from '../../context/globalContext'
import { GlobalStyle } from '../../styles/GlobalStyle'

import Orb from './Orb'

const StyledLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;
`

const AppStyled = styled.div`
  height: 100vh;
  background-image: url('./img/bg.png');
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`

function Layout({ children }: { children?: React.ReactNode }) {
  const { data } = useSession({ required: true })

  const OrbMemoized = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <GlobalProvider>
      <GlobalStyle />
      <AppStyled>
        {OrbMemoized}
        <StyledLayout>
          <Nav username={data?.user?.name} />
          <main>{children}</main>
        </StyledLayout>
      </AppStyled>
    </GlobalProvider>
  )
}

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <SessionProvider>
      <Layout>{children}</Layout>
    </SessionProvider>
  )
}
