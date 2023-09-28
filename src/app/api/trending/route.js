import { NextResponse } from "next/server";
import  { Trending_Products } from '@/constants/trends';


export const GET = async () => {
    try {

        return NextResponse.json({message : "Data fetched successfully", success : true, Trending_Products   })
        
    } catch (error) {
        NextResponse.json({
            message : "couldn't get data from API"
        }, { status : 400});
    }
}