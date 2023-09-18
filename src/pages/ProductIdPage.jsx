import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProducts from "../components/ProductId/SimilarProducts"
import SliderImg from "../components/ProductId/SliderImg"
import './styles/ProductIdPage.css'
import Loading from "./Loading"
const ProductIdPage = () => {

  const { id } = useParams() //parametros de ruta se captura con useParams y retorna un objeto
  
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL
  const [ product, getProductById,, isLoading ] = useFetch(baseUrl)

  useEffect(() => {
    getProductById(`/products/${id}`)
  }, [id])

  return (
    <div>
      {
        isLoading
          ? <Loading />
          : <>
              <div className="productPage__container">
                <SliderImg 
                  product={product}
                />
                <ProductInfo
                  product={product}
                />
              </div>
                <SimilarProducts
                  product={product}
                />
            </>
      }
    </div>
  )
}

export default ProductIdPage