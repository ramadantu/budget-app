// Keycloak Documentation: https://www.keycloak.org/docs/latest/server_admin/index.html#_client_installation

const config = {
  'confidential-port': 0,
  'auth-server-url': 'http://localhost:8080/',
  resource: 'budget-app',
  'ssl-required': 'none',
  realm: 'budget-app',
  'bearer-only': true,
  'realm-public-key': process.env.KC_REALM_PUBLIC_KEY,
}

export default config
