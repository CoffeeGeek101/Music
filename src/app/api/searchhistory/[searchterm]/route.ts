import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ISearchHistory{
    searchterm : string
}

export async function POST(request : Request, {params} : {params : ISearchHistory}) {
    
    const {searchterm} = params;

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    try{
        const keyExists = await db.exists(`user:${user.id}:searchHistory`);

        if(keyExists){
            await db.lrem(`user:${user.id}:searchHistory`,0,searchterm);
            await db.lpush(`user:${user.id}:searchHistory`, searchterm);
        }else{
            await db.lpush(`user:${user.id}:searchHistory`, searchterm);
        }
        return NextResponse.json({success : true});
    }catch(error){
        return NextResponse.error();
    }
}
