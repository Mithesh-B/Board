import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

//nextauth authentication
export const authOptions = {
  //google authentication provider
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID, //fetched secret key and client key from .env file
        clientSecret: process.env.GOOGLE_SECRET,
      }),
   
  ],

  secret: process.env.JWT_SECRET
 
}

export default NextAuth(authOptions)
