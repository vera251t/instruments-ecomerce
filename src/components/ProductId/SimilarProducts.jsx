import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../Home/CardProduct"

const SimilarProducts = ({ product }) => {
  //const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL

  const [ productByCategory, getProductByCategory ] = useFetch(baseUrl)

  useEffect(() => {
    if(product) {
      getProductByCategory(`/products?category=${product.category.id}`)
    }
  }, [product])

  return (
    <div>
      <h2 className="home__product-title">Similar Products</h2>
      <div className="home__product-container">
        {
          productByCategory?.map(prod => {
            if(product.id !== prod.id) {
              return ( 
              <CardProduct
                key={prod.id} 
                prod={prod}
              />)
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts