import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ISongHistory{
    songhistoryId : string
}

export async function POST(request : Request,{params} : {params : ISongHistory}){

    if (!params || !params.songhistoryId) {
        throw new Error('invalid param')
    }

    const {songhistoryId} = params;
    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

   try{
        const songHistory_check = await db.exists(`user:${user.id}:songHistory`);
        const MAX_length = 5;

        if(songHistory_check){
            await db.lrem(`user:${user.id}:songHistory`,0,songhistoryId);
            await db.lpush(`user:${user.id}:songHistory`,songhistoryId);
            const list_length = await db.llen(`user:${user.id}:songHistory`)
            if(list_length > MAX_length){
                await db.rpop(`user:${user.id}:songHistory`)
            }
        }else{
            await db.lpush(`user:${user.id}:songHistory`, songhistoryId) 
        }
    }catch(error){
        console.log(error)
    }
    return NextResponse.json({success : true},{status : 200});
}