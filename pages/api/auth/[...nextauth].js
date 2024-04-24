import { LOGIN_URL } from "@/utils/spotify"
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization:LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, account, user}){

        // Initial sign in
        if(account && user) {
            return{
                // token: account.access_token,
                ...token,
                accessToken: account.access_token,
                refreshToken: account.refresh_token,
                username: account.providerAccountId,
                accessTokenExpires: account.expires_at * 1000, // we are handling expiry times in ms
            }
        }
    }
  }
}
export default NextAuth(authOptions)