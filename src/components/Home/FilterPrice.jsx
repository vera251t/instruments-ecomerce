import './styles/FilterPrice.css'
import { useForm } from 'react-hook-form'
const FilterPrice = ({ priceMinMax, setPriceMinMax }) => {

  const { register, reset, handleSubmit } = useForm()

  const submit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from
    const max = data.to.trim() === "" ? Infinity : +data.to
    setPriceMinMax({ min, max })
  }

  const handleClearFilter = () => {
    setPriceMinMax({ min: 0, max: Infinity })
    reset({
      from: "",
      to: ""
    })
  }
  return (
    <article className='filter__price'>
        <h3>Price</h3>
        <hr/>
        <form className='filter__price-item' onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From</label>
                <input {...register('from')} type="number" id="from"/>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')} type="number" id="to"/>
            </div>
            <button className='filter__price-btn'>Filter price</button>
        </form>
        {
          priceMinMax.min !== 0 || priceMinMax.max !== Infinity
          ? <p className='filter__paragrah'>From {priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFilter} style={{cursor: 'pointer'}}>X</b></p>
          : ''
        }
    </article>
  )
}

export default FilterPrice