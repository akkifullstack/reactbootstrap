import  React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import './header.css'

const Header = () => (
     <div>
     <nav className="navlink">
    <NavLink to="/" className="link">Home</NavLink>
    <NavLink to="/form" className="link">Form</NavLink>
    <NavLink to="/card" className="link">Card</NavLink>
    </nav>
    </div>
)

export default Header;