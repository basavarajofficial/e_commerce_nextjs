import { NextResponse } from "next/server";
import { ProductsData } from "@/constants/data";

export const GET = async () => {
    try {

        return NextResponse.json({message : "Data fetched successfully", success : true, ProductsData ,  },
        {status : 200});
        
    } catch (error) {
        NextResponse.json({message : error.message}, {status : 400} )
    }
}