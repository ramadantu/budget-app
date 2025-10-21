import { createRoot } from 'react-dom/client'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import App from './App'
import { GlobalProvider } from './context/globalContext'
import { GlobalStyle } from './styles/GlobalStyle'
import keycloak from './utils/keycloak'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute'
import { NotFound } from './Pages/NotFound'

const tokenLogger: (token: any) => void = (token) => {
  localStorage.setItem('token', JSON.stringify(token))
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <ReactKeycloakProvider
    initOptions={{ onLoad: 'login-required' }}
    authClient={keycloak}
    onTokens={tokenLogger}
  >
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <GlobalProvider>
                  <GlobalStyle />
                  <App />
                </GlobalProvider>
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound id="not-found-page" />} />
      </Routes>
    </Router>
  </ReactKeycloakProvider>,
)
