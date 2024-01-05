import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {email, password} = credentials;
                try {
                    const user =  await User.findOne({email: email});
                    if (!user)
                    {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch)
                    {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks : {
      async signIn({user, account}) {
        const {name, email} = user;
        if (account.provider === "google" || account.provider === "github")
        {
            try {
                const userExists = await User.findOne({email});
                if (!userExists)
                {
                    let address = "address";
                    let mobile = "mobile";
                    let password = "password";
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/register`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name, address, mobile, email, password,
                        }),
                      }) 
                    if (res.ok)
                    {
                        return user;
                    }
                }
            }
            catch (error)
            {
               console.log(error);
            }
        }
        return user;
      }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/SignIn",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};