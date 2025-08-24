"use client"

import Link from "next/link"
import Categories from "./categories"
import { useContext, useEffect } from "react"
import { contextcart, contextFav } from "@/app/context/context"


export default function Nav() {
    useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
  let cartContext = useContext(contextcart)
  let favContext = useContext(contextFav)
    return(

        <nav className="navbar z-3 bg-primary navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="w-25" src="./shopping-bag.png"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active position-relative border border-1 border-secondary-subtle" aria-current="page" href="/cart">Cart
           <span class="position-absolute z-3 top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartContext.cartsobj.length}
    <span class="visually-hidden">unread messages</span>
  </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active position-relative" aria-current="page" href="/favorites">favorites
           <span class="position-absolute z-3 top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {favContext.fav.length}
    <span class="visually-hidden">unread messages</span>
    </span>
          </Link>
        </li>
          {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/favorites"> <Categories/> </Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    )
}