import { Redis } from '@upstash/redis';

// ! => non-null assertion operator, asserts that the value is not null or undefined

export const db = new Redis({
    url : process.env.UPSTASH_REDIS_REST_URL!,
    token : process.env.UPSTASH_REDIS_REST_TOKEN!
})