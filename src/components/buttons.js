"use client"
 
 import { useContext } from "react"
 import Fav from "@/app/favorites/page"
import { contextcart, contextFav } from "@/app/context/context"
export function Fun({object, cart}) {
    
 let context = useContext(contextcart)
 function addelement(object) {
    if (cart == true ) {
        let newArray = context.cartsobj.filter((obj)=>{
            return obj.id !== object.id
        } )
         context.setcartobj([...newArray])
    }
    else{
        context.setcartobj([...context.cartsobj, object])
    

    }
    
}
return (

    <button style={cart?{backgroundColor:"red"}:{backgroundColor:"green"}} onClick={()=>addelement(object)}>
        {
            cart == true ? "remove from cart" :" add to cart "
        }
       
    </button>

)

 }


export function Addtofav({object , fav}) {

let favbtn = useContext(contextFav)
function addElementToFav(object) {
if (fav == true) {

   let newArray =( favbtn.fav).filter(obj=>{
        return obj.id !== object.id
    }
)
favbtn.setfav([...newArray])
    
}
else(
    
    favbtn.setfav([...favbtn.fav, object])
)
}

    return(
        <button onClick={()=>addElementToFav(object)} >
            
        {
            fav == true ? "remove from favorites" :" add to favorites "
        }
        </button>
    )
}

