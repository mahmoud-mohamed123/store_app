"use client"

import { contextcat } from "@/app/context/context";
import { useContext } from "react";

function Categories({ cat }) {
let catcontext = useContext(contextcat)
function change(e) {
    catcontext.setconcat(e.target.value)
    
}
    return (
        <>
            <div className="categories">
                <select value= {catcontext.concat?catcontext.concat:"all" } onChange={(e)=>change(e)}>
                    <option  value={"all"}>
                        all
                    </option>


                    {cat.map(option => {
                        return (
                            <option value={option}>
                                {option}
                            </option>
                        )
                    })}

                </select>

            </div>
        </>

    )


}
export default Categories