import { useForm } from 'react-hook-form'
import useAuth from '../hooks/userAuth'
import { Link } from "react-router-dom";
import './styles/Register.css'

const RegisterPage = () => {
  //const url ='https://e-commerce-api-v2.academlo.tech/api/v1/users'
  const { register, handleSubmit, reset } = useForm()
  const { createUser } = useAuth()
  
  const submit = data => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url =`${BASE_URL}/users`
    createUser(url, data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: ''
    })
  }

  return (
    <>
      <div className='register'>
        <div className='register__container'>  
          <h2>Sign Up Now</h2>
          <form className='register__form' onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="firstName">First name </label>
              <input {...register('firstName')} type="text" id="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last name </label>
              <input {...register('lastName')} type="text" id="lastName" />
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input {...register('email')} type="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password </label>
              <input {...register('password')} type="password" id="password" />
            </div>
            <div>
              <label htmlFor="phone">Phone </label>
              <input {...register('phone')} type="number" id="phone" />
            </div>
            <button className='register__btn'>Register</button>
          </form>
        </div>
      </div>
      <footer className='footer__regis'>
        <h4 className='footer__regis-h4'>
          Already have an account?{" "}
          <Link to="/login">
            Login in
          </Link>
        </h4>
      </footer>
    </>
  )
}

export default RegisterPage