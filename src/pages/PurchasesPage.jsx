import { useEffect } from "react"
import usePurchase from "../hooks/usePurchase"
import PurchaseCard from "../components/Purchases/PurchaseCard"
import './styles/PurchasesPage.css'
const PurchasesPage = () => {

    const { purchases, getAllPurchase } = usePurchase()

    useEffect(() => {
        getAllPurchase()
    }, [])

  return (
    <div className="purchases">
        <h2>My purchases</h2>
        <div className="purchases__items">
            {
                purchases?.map(prod => (
                    <PurchaseCard 
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage