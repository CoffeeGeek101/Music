import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";

interface IParams{
    langCode ?: string;
}

export async function POST(request : Request, {params} : {params : IParams}){

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const {langCode} = params;

    if(!langCode || (typeof langCode !== 'string')){
        throw new Error('Invalid Language code');
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('No user found');
    }

    dbUser.lang = [...(dbUser?.lang || [])];
    dbUser?.lang.push(langCode);

    await db.set(`user:${user.id}`,dbUser);
    
    return NextResponse.json(dbUser);

}

export async function DELETE(request : Request, {params} : {params : IParams}){

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const {langCode} = params;

    if(!langCode || (typeof langCode !== 'string')){
        throw new Error('Invalid language code');
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('No user found');
    }

    dbUser.lang = [...(dbUser.lang || [])];
    dbUser.lang = dbUser.lang.filter((code)=> code !== langCode);

    await db.set(`user:${user.id}`,dbUser);

    return NextResponse.json(dbUser);

}