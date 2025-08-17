"use client"

import { createContext, useState } from "react"
export let contextcart = createContext()
export let contextcat = createContext()
function Haga({children}) {
    let [cartsobj,setcartobj] = useState([])
    let [concat, setconcat] = useState("all")
    return(
        <contextcart.Provider value={{cartsobj , setcartobj}}>
            <contextcat.Provider value={{concat , setconcat}}>
    <div>

    {children}

    </div>
    </contextcat.Provider>
    </contextcart.Provider>
    
    )
}

export default Haga ;
 
