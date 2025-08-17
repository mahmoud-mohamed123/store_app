"use client"
 
 import { useContext } from "react"
import { contextcart } from "@/app/context/context"
export function Fun({object}) {
    
 let context = useContext(contextcart)
 function addelement(object) {
    context.setcartobj([...context.cartsobj, object])
    console.log(context);
    
}
return (

    <button onClick={()=>addelement(object)}>
        add to cart 
    </button>

)

 }


export function Addtofav(params) {

    return(
        <button>
            add to favorite
        </button>
    )
}

