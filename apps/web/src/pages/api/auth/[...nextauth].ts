import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'

export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.AUTH_KEYCLOAK_ID!,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET!,
      issuer: `${process.env.AUTH_KEYCLOAK_URL}/realms/${process.env.AUTH_KEYCLOAK_REALM}`,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) token.accessToken = account.access_token
      return token
    },
    async session({ session, token }) {
      session.user = {
        email: token.email ?? null,
        name: token.name ?? null,
        image: token.picture ?? null,
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET ?? '',
})
