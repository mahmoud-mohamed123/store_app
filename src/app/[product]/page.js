

export default async function product({params}) {
    let data = await fetch(`https://fakestoreapi.com/products/${params.product}`)
    .then(response => response.json())
    .then(data => (data));
    
    
    return(
        <div className="oneProduct">

              <img className="img" src={data.image}/>
            <h2 className="title">
                {data.title}
            </h2>
            <p className="price">{data.price}</p>

                <progress max={"5"} value={data.rating.rate}></progress> <span>{data.rating.rate} rating</span>
                <h3>count : {data.rating.count}</h3>
                <h3>{data.category}</h3>
                <div className="btns">
                <button className="">add to cart</button> 
                <button className="">add to favorite</button>
                </div>
        </div>
    )
}