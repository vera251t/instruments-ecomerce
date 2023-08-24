import './styles/LogOut.css'

const LogOut = ({ user }) => {
  const handleLogOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  
  return (
    <main className='log__contain'>
        <div className='log__content'>
            <img src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png" alt="" />
            <p>Estás logueado</p>
            <p className='log__p'>{user.firstName} {user.lastName}</p>
            <button className='log__btn' onClick={handleLogOut}>Log Out</button>
        </div>
    </main>
  )
}

export default LogOut