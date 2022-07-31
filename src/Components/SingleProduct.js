import React from 'react'
import './Style.css'

const SingleProduct = ({ product, cart, setCart }) => {
    // console.log(product);
    const { id, title, image, price, description, rating } = product
    return (
        <div className='products' >
            <img src={image} alt="" />
            <div >
                <h2>{title.slice(0, 12)}</h2>
                <h2>${price}</h2>
                <p>{rating.rate}</p>
                <button onClick={() => {
                    setCart([...cart, product])
                }}>Add to Cart</button>

            </div>

        </div>
    )
}

export default SingleProduct