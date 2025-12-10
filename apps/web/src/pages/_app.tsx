import { useMemo } from 'react'

import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/css/App.css'

import Orb from '../modules/Orb'
import { GlobalProvider } from '../context/globalContext'
import Layout from '../modules/Layout'

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

export default function App({ pageProps, Component }: AppProps) {
  const OrbMemoized = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <SessionProvider>
      <GlobalProvider>
        <AppStyled>
          {OrbMemoized}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppStyled>
      </GlobalProvider>
    </SessionProvider>
  )
}
