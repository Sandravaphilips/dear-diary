import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { MenuRounded, CloseRounded } from '@material-ui/icons';

import { NavigationStyle, MenuStyle } from './style';
import useOnClickOutside from './hooks/useOnClickOutside';
import logo from './assets/logo.svg';


const Navigation = () => {
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    const handleClick = () => {
        setOpen(!open);
    };

    const onLogout = (e) => {
        localStorage.removeItem("token");
    }

    return(
        <NavigationStyle ref={node}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuRounded />
                    </IconButton>
                    <figure>
                        <img src={logo} alt='app-logo' />
                    </figure>
                    <Link to='/' className='logout' onClick={onLogout}>Logout</Link>
                </Toolbar>
            </AppBar>            
            <Menu open={open} handleClick={handleClick} onLogout={onLogout} />
        </NavigationStyle>
    )
};

const Menu = ({open, handleClick, onLogout}) => {
    return(
        <MenuStyle open={open}>
            <CloseRounded onClick={handleClick} className='close-button' />
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/calendar'>Calendar</Link></li>
                <li onClick={onLogout}><Link to='/'>Logout</Link></li>
            </ul>
        </MenuStyle>
    )
}

export default Navigation