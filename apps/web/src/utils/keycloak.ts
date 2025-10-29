import Keycloak from 'keycloak-js';

const keycloak: Keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'budget-app',
    clientId: 'budget-app',
});

export const LogOutUser = () => {
    keycloak.logout({
        redirectUri: window.location.origin,
    });
}

export default keycloak;