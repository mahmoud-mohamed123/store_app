"use client"
import { useContext } from "react";
import { contextcart } from "../context/context";
import ProductCard from "@/components/productCard";


function cart() {
    let ay = useContext(contextcart)
    console.log(ay.cartsobj);
    
    return(
        <div className="content">
            <div className="products">
            {ay.cartsobj.map((obj , q)=>{
                return(
                    <ProductCard fav={false} cart={true} key={q} object={obj}/>
                )
            })}
            </div>
        </div>
    )
}

export default cart;