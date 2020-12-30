import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function Header() {
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() =>{
            dispatch(logout())
        })
    }
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const user = useSelector(selectUser);
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
            </div>
            <div className="header__middle">
                <IconButton>

                <SearchIcon />
                </IconButton>
                <input type="text" placeholder="Search mail"/>
                <IconButton>

                <ArrowDropDownIcon className="header__inputCaret" />
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="header__avatar" src={user.photoUrl} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem className="header__menuItem">
                        <Avatar src={user.photoUrl} />
                        </MenuItem>
                        <MenuItem className="header__menuItem">{user.displayName}</MenuItem>
                        <MenuItem className="header__menuItem">{user.email}</MenuItem>
                    <MenuItem className="header__menuItem" onClick={signOut}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header
