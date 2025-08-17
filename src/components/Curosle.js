"use client"
import { useEffect } from "react"

export default function Curosle({data}) {
   useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
    return(
<div id="carouselExampleCaptions" className= "w-100 carousel slide" data-bs-ride="carousel">
     <div className="carousel-indicators">
        {
            data.map(item=>{
                return(
                    <button className={ item.id == 1 &&"active" } data-bs-target="#carouselExampleCaptions" data-bs-slide-to={item.id -1} aria-label={"Slide "+ (item.id -1)}></button>

                )
            })
        }
  </div>
  <div className="carousel-inner">
   
    {data.map(item =>{
        return(
             <div className={ item.id == 1?"active carousel-item  bg-primary":"carousel-item  bg-primary" }  data-bs-interval="2000">
      <img src={item.image} className="d-block" alt={item.title}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{item.title}</h5> 
        <p>{item.description}</p>
      </div>
    </div>
        )
    })}
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}