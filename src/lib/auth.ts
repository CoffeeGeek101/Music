import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import {NextAuthOptions} from 'next-auth'
import { db } from './db'
import GoogleProvider from 'next-auth/providers/google'
import SpotifyProvider from 'next-auth/providers/spotify'
import { getGoogleIds, getSpotifyIds } from './util'

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
        }),
        SpotifyProvider({
            clientId : getSpotifyIds().client_id,
            clientSecret : getSpotifyIds().client_secret,
            authorization : { params : { scope : 'streaming user-read-email user-read-private user-read-playback-state' } }
        })
    ],
    callbacks : {
        async jwt({token,user, account}) {
            const dbUser = (await db.get(`user:${token.id}`)) as User | null
            
            if(!dbUser){
                token.id = user!.id;
                return token;
            }

            if(account?.provider === 'spotify'){
                console.log('spotify')
                token.spotifyAccessToken = account.access_token;
                return token;
            }

            return {
                id : dbUser.id,
                name : dbUser.name,
                email : dbUser.email,
                picture : dbUser.image,
                language : dbUser.lang,
                genre : dbUser.genre,
                likedSongs : dbUser.likedSongs,
                spotifyAccessToken : dbUser.spotifyAccessToken
            }
        },
        async session({session,token}){
            const dbUser = (await db.get(`user:${token.id}`)) as User | null
            if(token){
                session.user.id = token.id,
                session.user.name = token.name,
                session.user.email = token.email,
                session.user.image = token.picture,
                session.user.spotifyAccessToken = token.spotifyAccessToken as string
                if (dbUser) {
                    session.user.lang = dbUser.lang || []
                    session.user.genre = dbUser.genre || []
                    session.user.likedSongs = dbUser.likedSongs || []
                  } else {
                    session.user.lang = []
                    session.user.genre = []
                    session.user.likedSongs = []
                  }
            }
            return session
        },
        redirect() {
            return '/listennow'
        }
    }
}