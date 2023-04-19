import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import {NextAuthOptions} from 'next-auth'
import { db } from './db'
import GoogleProvider from 'next-auth/providers/google'
import { getGoogleIds } from './util'

export const authOption : NextAuthOptions = {
    adapter : UpstashRedisAdapter(db),
    session : {
        strategy : 'jwt'
    },
    pages : {
        signIn : '/'
    },
    providers : [
        GoogleProvider({
            clientId : getGoogleIds().client_id,
            clientSecret : getGoogleIds().client_secret
        })
    ],
    callbacks : {
        async jwt({token,user}) {
            const dbUser = (await db.get(`user:${token.id}`)) as User | null
            
            if(!dbUser){
                token.id = user!.id;
                return token;
            }

            return {
                id : dbUser.id,
                name : dbUser.name,
                email : dbUser.email,
                picture : dbUser.image,
                language : dbUser.lang,
                genre : dbUser.genre,
                likedSongs : dbUser.likedSongs
            }
        },
        async session({session,token}){
            if(token){
                session.user.id = token.id,
                session.user.name = token.name,
                session.user.email = token.email,
                session.user.image = token.picture,
                session.user.genre = [],
                session.user.lang = [],
                session.user.likedSongs = []
            }
            return session
        },
        redirect() {
            return '/listennow'
        }
    }
}