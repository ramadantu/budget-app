// @ts-ignore
import Keycloak from 'keycloak-js';

const keycloak: Keycloak = new Keycloak({
  url: 'http://localhost:8080',
    realm: 'budget-app',
    clientId: 'budget-app',
});

export default keycloak;