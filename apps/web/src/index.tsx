import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import App from './App'
import { GlobalProvider } from './context/globalContext'
import { GlobalStyle } from './styles/GlobalStyle'
import keycloak from './utils/keycloak'

const eventLogger: (event: any, error: any) => void = (event, error) => {
  console.log('keycloak event', event, error)
}

const tokenLogger: (token: any) => void = (token) => {
  console.log('keycloak token', token)
  localStorage.setItem('token', JSON.stringify(token))
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <ReactKeycloakProvider
      initOptions={{ onLoad: 'login-required' }}
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </ReactKeycloakProvider>
  </StrictMode>,
)
