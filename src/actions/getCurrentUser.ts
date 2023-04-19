import { authOption } from "@/lib/auth"
import { getServerSession } from "next-auth"

export const getCurrentUser = async () =>{

    const session = await getServerSession(authOption);

    if(!session?.user.email){
        return null;
    }
    const {id, name, email, image, genre, likedSongs, lang } = session.user;

    const user = {
        id,
        name,
        email,
        image,
        genre,
        likedSongs,
        lang
    }
    return user;
}