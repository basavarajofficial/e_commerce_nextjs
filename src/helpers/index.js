import { ProductsData } from "@/constants/data";
import axios from "axios";

// to get all products
export const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products");

    if(!res.ok){
        throw new Error("Couldn't get products");
    }

    return res.json();
}


export const percentageOff = (oldPrice, price) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice) ?( 100 - (oldPrice/price) * 100)?.toFixed(0) : 0;
}


export const getSingleProduct =(id) =>{
    const item = ProductsData.find((product) => product._id === id);

    return item;
}


export let getTrendProducts = async () => {
    const res = await fetch("http://localhost:3000/api/trending");

    if(!res.ok){
        throw new Error("Error while getting trend products");
    }

    return res.json();
}


export const subTotal = (qty, price) => {
    return qty * price;
}