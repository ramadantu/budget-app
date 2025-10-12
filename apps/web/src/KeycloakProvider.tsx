// @ts-ignore
import Keycloak from 'keycloak-js'
import { useState } from 'react'

const KeycloakProvider = ({ children }: { children: React.ReactNode }) => {
  const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'budget-app',
    clientId: 'budget-app',
  })

  const authenticated = keycloak.init({ onLoad: 'login-required' })
  console.log(authenticated)

  if (!authenticated) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
export default KeycloakProvider
