import { useNavigate } from 'react-router-dom'
import './styles/CardProduct.css'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CardProduct = ({ prod }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleDetail = () => {
        navigate(`/product/${prod.id}`)
    }

    const handleAddCart = (e) => {
        e.stopPropagation()
        dispatch(postCartThunk(prod))
    }

  return (
    <article className="product" onClick={handleDetail}>
        <header className="product__header">
            <div className='product__img-container'>
                <img className="product__img" src={prod.productImgs[0].url} alt="" />
            </div>
            <div className='product__img-container'>
                <img className="product__img" src={prod.productImgs[1].url} alt="" />
            </div>
        </header>
        <section className="product__body">
            <header className="product__titles">
                <h3 className="product__brand">{prod.brand}</h3>
                <h2 className="product__name">{prod.title}</h2>
            </header>
            <article className="product__price">
                <span className="product__price-label">Price</span>
                <h3 className="product__price-value">$ {prod.price}</h3>
            </article>
            <button className="product__btn" onClick={handleAddCart}>
                <i className='bx bx-cart' ></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct