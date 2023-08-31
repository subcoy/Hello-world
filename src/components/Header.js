import React from 'react';
import '../style/index.css';
import logo  from '../images/logo.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
       
        <Link to="/">
            <img className='logo' src = {logo} alt="logo" with="150"/>            
        </Link>

         <ul>
            <li >
                <Link to="/">HOME</Link>
            </li>
            <li >
                <Link to="/products">PRODUCTS</Link>
            </li>        
        </ul>  

        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span >0</span>
        </div>
       
    </header>

  )
}

