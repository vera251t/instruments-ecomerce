import { useDispatch } from "react-redux"
import { deleteCartThunk } from "../../store/slices/cart.slice"
import './styles/CartElement.css'
const CartElement = ({ prod }) => {
    
    const disptach = useDispatch()

    const handleDelete = () => {
        disptach(deleteCartThunk(prod.id))
    }
  return (
    <article className="prod__cart">
        <header>
            <img className="prod__img-cart" src={prod.product.images[0].url} alt="" />
        </header>
        <section className="prod__in">
            <h3>{prod.product.title}</h3>
            <p><span>{prod.quantity}</span> x <span>${prod.product.price}</span></p>
            <button className="prod__btn-cart" onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </button>
        </section>
        <footer className="footer__cart">
            <span className="footer__cart-span">Subtotal </span><span>${prod.quantity * prod.product.price}</span>
        </footer>
    </article>
  )
}

export default CartElement