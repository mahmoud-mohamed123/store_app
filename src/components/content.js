import ProductCard from "./productCard";
import Products from "./products";
import Categories from "./categories";
// import Curosle from "./Curosle";

export default async function Content() {
  let data = await fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => (data));

  let categories = await fetch('https://fakestoreapi.com/products/categories')
   .then(response => response.json())
  .then(data => data);

    return(
        <>
         <h2>
                products
            </h2>
           
           {/* <Curosle data={data}/> */}
        <div className="content">
          
          <Categories cat={categories}/>
          <Products data={data}/>
            
         
      </div>
           </>
    )
}
 