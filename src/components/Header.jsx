import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container-fluid">
            <div className="row">
                <nav className='navbar-header'>
                    <NavLink to="/" activeClassName="active">Lista Tasks</NavLink>
                    <NavLink to="/addTask" activeClassName="active">Aggiungi Task</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
