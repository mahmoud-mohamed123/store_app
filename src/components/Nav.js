"use client"

import Link from "next/link"
import Categories from "./categories"
import { useEffect } from "react"


export default function Nav() {
    useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js")
  }, [])
    return(

        <nav className="navbar z-3 bg-primary navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/favorites">favorites</Link>
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