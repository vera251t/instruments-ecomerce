import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoading: false,
    },
    reducers: {
        setProductsG: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setProductsG, setLoading } = productsSlice.actions

export default productsSlice.reducer

const BASE_URL = import.meta.env.VITE_REACT_APP_URL
const defaultUrl = `${BASE_URL}/products`

export const getAllProductsThunk = (url = defaultUrl) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(url)
        .then(res => dispatch(setProductsG(res.data)))
        .catch(err => console.log(err))
        .finally(() => dispatch(setLoading(false)))
}