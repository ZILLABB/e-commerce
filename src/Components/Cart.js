import React from 'react'

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = React.useState([])
  React.useEffect(() => {
    const num = cart.reduce((acc, currValue) => acc + (currValue.price), 0)
    setTotal(num.toFixed(2))
  }, [cart])

  localStorage.setItem("product", JSON.stringify(cart))
  const product = JSON.parse(localStorage.getItem("product")) 

  const removeItem = (products) => {
    const productIndex = product.findIndex((item) => item === products);
    if (productIndex !== -1) {
      product.splice(productIndex, 1)
      setCart(product)
    }
  }
  

  return (
    <div>
      <h2>Cart</h2>
      <p>Total: ${total}</p>
      <div className="editin">
        {product.map((data, index) => {
          // const { id, title, image, price, description, rating } = xx
          return (
            <div className="products" key={index}>
              <img src={data.image} alt="" />

              <h2>{data.title.slice(0, 12)}</h2>
              <h2>${data.price}</h2>
              <p>rating: {data.rating.rate}</p>
              <button onClick={() => {removeItem(data);} }>
                Remove from Cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart