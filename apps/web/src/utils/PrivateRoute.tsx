import { JSX } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Unauthenticated } from '../Pages/Unauthenticated'
import Keycloak from 'keycloak-js'
import { Loading } from '../Pages/Loading'

interface ComponentProperties {
  children: JSX.Element
}

export const PrivateRoute: (props: ComponentProperties) => JSX.Element = ({ children }) => {
  const { initialized, keycloak }: { initialized: boolean; keycloak: Keycloak } = useKeycloak()

  const isLoggedIn: boolean | undefined = keycloak.authenticated

  return !initialized ? (
    <Loading id="loading-page" />
  ) : isLoggedIn ? (
    children
  ) : (
    <Unauthenticated id="unauthenticated-page" />
  )
}
