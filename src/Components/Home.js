import React from 'react'
import { useState } from 'react'
import { data } from './database'
import SingleProduct from './SingleProduct'

const Home = ({ cart, setCart }) => {
    const [products, setProducts] = useState(data)
    function filterCategory(cat) {
        let filterCategory = data.filter((prod) => prod.category === cat)
        setProducts(filterCategory)
    }


    return (

        <div>
            <div className='main'>
                <h2>My Products</h2>
                <div>
                    <button onClick={() => filterCategory("men's clothing")} >Men's Clothes</button>
                    <button onClick={() => filterCategory("women's clothing")} >Women's Clothes</button>
                    <button onClick={() => filterCategory('jewelery')} >Jewelry</button>
                    <button onClick={() => filterCategory('electronics')} >Electronics</button>
                    <button onClick={() => setProducts(data)} >All Products</button>
                </div>

                <div className='editin'>
                    {products.map((product) => {
                        // const {id, title , image,price, description, rating} = product
                        return (
                            <div key={product.id}>
                                <SingleProduct product={product} cart={cart} setCart={setCart} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Home