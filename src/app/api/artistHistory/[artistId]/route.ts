import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IArtistHistory{
    artistId : string
}

export async function POST(request : Request,{params} : {params : IArtistHistory}){

    if (!params || !params.artistId) {
        throw new Error('invalid param')
    }

    const {artistId} = params;
    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

   try{
        const artistHistory_check = await db.exists(`user:${user.id}:artistHistory`);
        const MAX_length = 5;

        if(artistHistory_check){
            await db.lrem(`user:${user.id}:artistHistory`,0,artistId);
            await db.lpush(`user:${user.id}:artistHistory`,artistId);
            const list_length = await db.llen(`user:${user.id}:artistHistory`)
            if(list_length > MAX_length){
                await db.rpop(`user:${user.id}:artistHistory`)
            }
        }else{
            await db.lpush(`user:${user.id}:artistHistory`, artistId) 
        }
    }catch(error){
        console.log(error)
    }
    return NextResponse.json({success : true},{status : 200});
}