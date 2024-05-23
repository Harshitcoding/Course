import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../Images/logo.png';
import img2 from '../Images/cart.png'
import { useSelector } from 'react-redux';

function Header() {
    const items = useSelector((state) => state.cart); // Assuming state.cart is the slice containing the cart items

    return (
        <div className='flex justify-between items-center text-white'>
            <div>
                <img src={img1} alt="Logo" className='w-32 mt-5 pl-5'/>
            </div>
            <ul className='flex font-bold'>
                <li className='ml-6'><NavLink to='/'>Home</NavLink></li>
                <li className='ml-6'><NavLink to='/About'>About</NavLink></li>
                <li className='ml-6'><NavLink to='/purchased'>Purchased</NavLink></li>
                <li className='ml-6'><NavLink to='/course'>Course</NavLink></li>
                <li className='ml-6'><NavLink to='/teach'>Teach</NavLink></li>
                <li className='ml-6 relative'>
                    <NavLink to='/cart' className='flex items-center'>
                        <img src={img2} alt="Cart"/>
                        <span className='mr-1'>{items.items.length}</span>
                    </NavLink>
                </li>
                <li className='ml-6'><NavLink to='/login'>Login</NavLink></li>
                <li className='ml-6'><NavLink to='/signup'>Signup</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;
