import { useMemo } from 'react'

import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/css/App.css'

import StyledApp from '../styles/StyledApp'
import AnimatedBackground from '../components/AnimatedBackground'
import { GlobalProvider } from '../context/globalContext'
import Layout from '../modules/Layout'

export default function App({ pageProps, Component }: AppProps) {
  const AnimatedBackgroundMemoized = useMemo(() => {
    return <AnimatedBackground />
  }, [])

  return (
    <SessionProvider>
      <GlobalProvider>
        <StyledApp>
          {AnimatedBackgroundMemoized}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyledApp>
      </GlobalProvider>
    </SessionProvider>
  )
}
