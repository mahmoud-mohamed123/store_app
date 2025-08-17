 "use client"

import { useContext } from "react"
 import ProductCard from "./productCard"
import { contextcat } from "@/app/context/context"


  function Products({data}) {
    let {concat} = useContext(contextcat)
    console.log(concat);
    let elements ;
    if (concat == "all") {
        elements = data.map(obj=>{
            return  <ProductCard key={obj.id} object={obj}/>
        })
    }
    else{
         elements = data.map(obj=>{
            if (concat == obj.category) {
                return  <ProductCard key={obj.id} object={obj}/>
            }
        })
    }
    
    return(
      
          
            <div className="products">
             {elements}
            </div>

    )
 }
 export default Products