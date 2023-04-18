import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const BASE_URL = 'https://api.spotify.com/v1';

export function cn(...inputs : ClassValue[]){
    return twMerge(clsx(inputs));
}