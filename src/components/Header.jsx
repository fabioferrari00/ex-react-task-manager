import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container-fluid">
            <div className="row">
                <nav className='navbar-header'>
                    <NavLink to="/" >Lista Tasks</NavLink>
                    <NavLink to="/addTask" >Aggiungi Task</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
