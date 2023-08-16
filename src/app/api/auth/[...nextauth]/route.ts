import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDB } from "../../../../../utils/database";
import User from "../../../../../models/user";
import { userAgent } from "next/server";
import sha256 from 'crypto-js/sha256';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await connectToDB();

                const user = await User.findOne({ name: credentials?.username })
                // user?.password

                const users = await User.find({});
                // If no error and we have user data, return it
                if (user && credentials?.password && user?.password === sha256(credentials?.password).toString()) {
                    return {
                        id: user._id.toString(),
                        name: user.name
                    }
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }