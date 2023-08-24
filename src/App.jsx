import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/cart.slice'
import Footer from './components/shared/Footer'
import PurchasesPage from './pages/PurchasesPage'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
