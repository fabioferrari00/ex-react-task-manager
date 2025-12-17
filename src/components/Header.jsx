import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-warning'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 text-center">
                    <NavLink to="/taskList">Lista Tasks</NavLink>
                </div>
                <div className="col-6 text-center">
                    <NavLink to="/addTask">Aggiungi Task</NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
