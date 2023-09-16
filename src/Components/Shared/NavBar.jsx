import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className='flex items-center justify-between w-full sm:h-12 md:h-16 lg:h-20 sm:px-16 md:px-28 lg:px-52 bg-primary'>
                <Link to='/'>
                    <img className='sm:w-20 md:w-28 lg:w-32  cursor-pointer' src={logo} alt="" />
                </Link>
                <button className='sm:text-xs md:text-l lg:text-l sm:px-4 md:px-4 lg:px-4 py-2 rounded-md bg-tertiary text-praimary-text active:bg-secondary' onClick={() => navigate('/login')}>Sign In</button>
            </nav >
        </>
    );
};

export default NavBar;