import { useState } from "react"
import './styles/ProductInfo.css'
import { useDispatch } from 'react-redux'
import { postCartThunk } from "../../store/slices/cart.slice"
const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const handleMinus = () => {
        if(quantity - 1 >= 1) {
            setQuantity(state => state - 1)
        }
    }
    const handleAdd = () => setQuantity(state => state + 1)

    const dispatch = useDispatch()
    const handleAddtoCart = () => {
        dispatch(postCartThunk(product, quantity))
    }
  return (
    <article className="product__info">
        <h3 className="product__brand">{product?.brand}</h3>
        <h2 className="product__title">{product?.title}</h2>
        <p className="product__description">{product?.description}</p>
        <footer>
            <ul className="product__ul">
                <li>
                    <div className="product__price">    
                        <span className="product__subtitle">Price</span>
                        <span>$ {product?.price}</span>
                    </div>
                </li>
                <li>
                    <span className="product__subtitle">Quantity</span>
                    <div className="product__quantity">
                        <div onClick={handleMinus} className="product__quantity-btn">-</div>
                        <div className="product__number">{quantity}</div>
                        <div onClick={handleAdd} className="product__quantity-btn">+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddtoCart} className="product__btn-i">Add to cart <i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo