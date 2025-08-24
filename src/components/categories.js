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
            <div style={{maxWidth:"max-content"}}  className="categories w-100 d-flex justify-content-start py-3 overflow-x-auto">
                {/* <select value= {catcontext.concat?catcontext.concat:"all" } onChange={(e)=>change(e)}> */}
    
                <button style={ catcontext.concat == "all"?{backgroundColor:"#a3a3a3ff",
                            width:"auto",
                            textWrap:"nowrap",
                           minWidth:"max-content",
                            color:"white",
                            borderRadius:"7px",
                            margin:"0px 10px 0px 10px",
                            padding:"10px",
                            
                            color:"black"}:  { backgroundColor :"#c9c9c9",
                            width:"auto",
                           
                            color:"white",
                            borderRadius:"7px",
                            margin:"0px 10px 0px 10px",
                            padding:"10px",color:"black"}} value={"all"} onClick={(e)=>change(e)} >all</button>
                        
                   


                    {cat.map(option => {
                        return (
                           <button style={
                            option == catcontext.concat ? {backgroundColor:"#a3a3a3ff",
                            width:"auto",
                            textWrap:"nowrap",
                           
                            color:"white",
                            borderRadius:"7px",
                            margin:"0px 10px 0px 10px",
                            padding:"10px",
                            color:"black"}:
                            {
                            backgroundColor :"#c9c9c9",
                            textWrap:"nowrap",
                            width:"auto",
                           
                            color:"white",
                            borderRadius:"7px",
                            margin:"0px 10px 0px 10px",
                            padding:"10px",
                            color:"black"
                           }} value={option} onClick={(e)=>change(e)}>{option}</button>
                        )
                    })}

                {/* </select> */}




                

            </div>
        </>

    )


}
export default Categories