import { Link } from "react-router-dom"
import './styles/Header.css'
const Header = () => {
  return (
    <header className="header">
        <h1 className="header__title">
            <Link to='/'>Instruments</Link>
        </h1>
        <nav>
            <ul className="header__ul">
                <li>
                    <Link to='/register'><i className='bx bx-user'></i></Link>
                </li>
                <li>
                    <Link to='/login'><i className='bx bx-user-check'></i></Link>
                </li>
                <li>
                    <Link to='/cart'><i className='bx bx-cart'></i></Link>
                </li>
                <li>
                    <Link to='/purchases'><i className='bx bx-box'></i></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header