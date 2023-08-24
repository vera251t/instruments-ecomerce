import { useSelector } from "react-redux"
import CartElement from "../components/cart/CartElement";
import usePurchase from '../hooks/usePurchase'
import './styles/CartPage.css'
const CartPage = () => {

  const cart = useSelector(state => state.cart)

  const totalPrice = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price
    return acc + subtotal
  }, 0)

  const { makePurchase } = usePurchase()
  const handlePurchase = () => {
    makePurchase()
  }

  return (
    <div className='cart'>
        <h2>Cart</h2>
        <div className="cart__container">
          {
            cart.map(prod => (
              <CartElement 
                key={prod.id}
                prod={prod}
              />
            ))
          }
        </div>
        <footer className="cart__footer">
          <div>
            <span>total: </span><span>${totalPrice}</span>
          </div>
          <button className="cart__footer-btn" onClick={handlePurchase}>Purchase this cart</button>
        </footer>
    </div>
  )
}

export default CartPage