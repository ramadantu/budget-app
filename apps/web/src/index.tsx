import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from '@budget-app/ui'
import { GlobalStyle } from './styles/GlobalStyle'
import KeycloakProvider from './KeycloakProvider'
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <KeycloakProvider>
    <StrictMode>
      <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </StrictMode>
  </KeycloakProvider>,
)
