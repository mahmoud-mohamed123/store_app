"use client"

import { createContext, useState } from "react"
export let contextcart = createContext()
export let contextcat = createContext()

export let contextFav = createContext()

function Haga({children}) {
    let [cartsobj,setcartobj] = useState([])
    let [concat, setconcat] = useState("all")
    let [fav , setfav] = useState([])
    return(

        <contextcart.Provider value={{cartsobj , setcartobj}}>
            <contextcat.Provider value={{concat , setconcat}}>
                <contextFav.Provider value={{fav , setfav}}>
    <div>

    {children}

    </div>
   </contextFav.Provider>
    </contextcat.Provider>
    </contextcart.Provider>
    
    )
}

export default Haga ;
 
