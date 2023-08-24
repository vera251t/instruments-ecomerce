import { useForm } from "react-hook-form"
import useAuth from "../hooks/userAuth"
import './styles/Login.css'
import LogOut from "./LogOut"
import { Link } from "react-router-dom";

const LoginPage = () => {
    //const url =  'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    const { register, handleSubmit } = useForm()
    const { loginUser } = useAuth()
    const submit = data => {
        const BASE_URL = import.meta.env.VITE_REACT_APP_URL
        const url =  `${BASE_URL}/users/login`
        loginUser(url, data)
        const user = localStorage.getItem("users");
        if (user) {
            window.location.reload();
        }
    }
    
    const user = JSON.parse(localStorage.getItem("users"));
    
  return (
    <>
        {user
            ? <LogOut user={user}/>
            : (
                <div className="login">
                    <div className="login__container">
                        <h2 className="login__title">Welcome! Enter your email and password to continue</h2>
                        <form className="login__form" onSubmit={handleSubmit(submit)}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input {...register('email')} type="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input {...register('password')} type="password" id="password" />
                            </div>
                            <button className="login__btn">Login</button>
                        </form>
                    </div>
                    <footer className="footer__user">
                        <h4 className="footer__h4">
                            Don't have an account?{" "}
                            <Link to="/register">
                                Sign Up
                            </Link>
                        </h4>
                    </footer>
                </div>)
            }
    </>
  )
}

export default LoginPage