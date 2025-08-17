import Link from "next/link";
import { Fun } from "./buttons";
import { Addtofav } from "./buttons";
export default function ProductCard({object}) {
    
    
    return(
        <div className="product-card p-3">
            <img className="" src={object.image}/>
            <Link className="text-decoration-none" href={`/${object.id}`}>
            <h3>
                {object.title}
            </h3>
                </Link>
            <p>
            {object.price} $

            </p>
            <div className="actions">
                {/* <button>
                    add to cart
                </button>
                <button>
                    add to favorites
                </button> */}
                <Fun object={object}></Fun>
                <Addtofav/>
            </div>
        </div>
    )
}