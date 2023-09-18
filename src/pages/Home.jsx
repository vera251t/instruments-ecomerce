import { useSelector } from "react-redux"
import CardProduct from "../components/Home/CardProduct";
import './styles/Home.css'
import { useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";
import Loading from "./Loading";
const Home = () => {

    const [isAsideOpen, setIsAsideOpen] = useState(false)
    const toggleAside = () => {
        setIsAsideOpen(!isAsideOpen)
    }
    const closeAside = () => {
        setIsAsideOpen(false)
    }

    const [priceMinMax, setPriceMinMax] = useState({
        min: 0,
        max: Infinity
    })
    const { data, isLoading } = useSelector(states => states.products)

    const [inputValue, setInputValue] = useState("")
    const handleSearchName = (e) => {
        setInputValue(e.target.value.toLowerCase())
    }
    
    const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

    const cbFilterPrice = prod => {
        const condMin = priceMinMax.min <= prod.price
        const condMax = prod.price <= priceMinMax.max
        return condMin && condMax
    }
  return (
    <div>
        <input className="home__input" value={inputValue} onChange={handleSearchName} type="text" placeholder="What are you looking for?"/>
        <div>
        <button className="home__filter-btn" onClick={toggleAside}><i className='bx bx-filter-alt'></i> Filters</button>
        </div>
        <aside className={`home__aside ${isAsideOpen ? 'open' : ''}`}>
            <h3 className="home__title">Filters</h3>
            <button onClick={closeAside}><i className='bx bxs-x-circle'></i></button>
            <FilterPrice priceMinMax={priceMinMax} setPriceMinMax={setPriceMinMax}/>
            <FilterCategory />
        </aside>
        {
            isLoading
                ?    <Loading />
                :   <div className="home__product-container">
                        {
                            data?.filter(cbFilter).filter(cbFilterPrice).map(prod => (
                                <CardProduct 
                                    key={prod.id}
                                    prod={prod}
                                />
                            ))
                        }
                    </div>
        }
    </div>
  )
}

export default Home