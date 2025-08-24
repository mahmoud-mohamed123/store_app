"use client"
import { useContext } from "react";
import { contextcart, contextFav } from "../context/context";
import ProductCard from "@/components/productCard";


function Fav() {
    let name = useContext(contextFav)
    console.log(name.fav);
    
    return(
        <div className="content">
            <div className="products">
            {name.fav.map((ob , e)=>{
                return(
                    <ProductCard fav={true} cart={false}  key={e} object={ob}/>
                )
            })}
            </div>
        </div>
    )
}

export default Fav;