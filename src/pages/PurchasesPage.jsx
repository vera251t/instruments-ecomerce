import { useEffect } from "react"
import usePurchase from "../hooks/usePurchase"
import PurchaseCard from "../components/Purchases/PurchaseCard"
import './styles/PurchasesPage.css'
import Loading from "./Loading"
const PurchasesPage = () => {

    const { purchases, getAllPurchase, isLoading } = usePurchase()

    useEffect(() => {
        getAllPurchase()
    }, [])

  return (
    <div className="purchases">
        {
            isLoading
                ?   <Loading />
                :   <>
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
                    </>
        }
    </div>
  )
}

export default PurchasesPage