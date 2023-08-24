import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartG } from "../store/slices/cart.slice"

const usePurchase = () => {

    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url = `${BASE_URL}/purchases`

    const getAllPurchase = () => {
        axios.get(url, getConfigAuth())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))
    }

    const makePurchase = () => {
        axios.post(url, {}, getConfigAuth())
            .then(res => {
                dispatch(setCartG([]))
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return { purchases, getAllPurchase, makePurchase }
}

export default usePurchase