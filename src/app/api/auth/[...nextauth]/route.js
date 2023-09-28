import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers : [
        // OAuth authentication providers...
        
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialProvider({
            name: 'Credentials',
            credentials : {
                username : {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Enter your username'
                },
                password : {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter your password'
                }
                },

                async authorize(credentials){
                    const user = {id : "1001", name: "basavaraj", password:"basu"};
                    if(credentials?.username === user.name && credentials?.password === user.password){
                        return user;
                    }else{
                        return null;
                    }
                }
            })
        ]
        });


export { handler as GET , handler as POST };