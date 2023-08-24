import './styles/PurchaseCard.css'
const PurchaseCard = ({ prod }) => {
  return (
    <article className='purchase__card'>
        <img className='purchase__img' src={prod.product.images[0].url} alt="" />
        <h3 className='purchase__card-title'>{prod.product.title}</h3>
        <div className='purchase__card-price'>
            <span>{prod.quantity}</span> x <span>{prod.product.price}</span>
        </div>
    </article>
  )
}

export default PurchaseCard