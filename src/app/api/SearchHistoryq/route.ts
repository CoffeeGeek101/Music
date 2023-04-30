import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }
    
    try{
        const searchHistory = await db.lrange(`user:${user.id}:searchHistory`,0,-1);
        return NextResponse.json({searchHistory : searchHistory || []})
    }catch(error){
        return NextResponse.error();
    }
}