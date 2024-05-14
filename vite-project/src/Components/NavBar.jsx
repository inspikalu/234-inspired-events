import React from 'react'
import './Css/NavBar.css'
function NavBar() {
    return (

        <nav className='navbar'>
            <div><img src="./img/Group 238419.png" alt="logo" /></div>

            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
            </ul>

            <button className='navbar-btn'>Book A Call</button>
        </nav>

    )
}

export default NavBar
