import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="brand">ddy</h1>
            <ul className="menu">
                <li className="menu_item">home</li>
                <li className="menu_item">about</li>
                <li className="menu_item">contact</li>
                <li className="menu_item">gallery</li>
            </ul>
        </nav>
    )
}

export default Navbar
