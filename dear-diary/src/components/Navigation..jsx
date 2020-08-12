import React from 'react';
import logo from './assets/logo.svg';
import { AppBar, Toolbar, IconButton, Button, MenuItem, Menu, Fade } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { NavigationStyle, MenuStyle } from './style';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <NavigationStyle>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className='menu-button' color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuRoundedIcon />
                    </IconButton>
                    <figure>
                        <img src={logo} alt='app-logo' />
                    </figure>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}                
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </NavigationStyle>
    )
};

// const Menu = () => {
//     return(
//         <MenuStyle>
//             <ul>
//                 <li>Dashboard</li>
//                 <li>Calendar</li>
//                 <li>Logout</li>
//             </ul>
//         </MenuStyle>
//     )
// }

export default Navigation