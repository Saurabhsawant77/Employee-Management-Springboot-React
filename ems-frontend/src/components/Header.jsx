import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {

    const navi = useNavigate();
  return (
    
    <header>
        <nav className="navbar navbar-dark bg-dark p-2 m-4 justify-content-center">
            <Link to='/employees' style={{ textDecoration: 'none' }}><a className="navbar-brand " href="#">Employee Management System</a></Link>
        </nav>
    </header>
  )
}

export default Header