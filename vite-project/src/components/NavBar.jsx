import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className='navbar'>
            <Link to='/'>
                <img src="./img/Group 238419.png" alt="logo" />
            </Link>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>

            <button className='navbar-btn'>Book A Call</button>
        </header>
    );
}

export default NavBar;