import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Badge} from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/img/logo.png';
import { Favorite, ShoppingCart} from '@mui/icons-material'
import './Navbar.css';
import { useStateValue } from '../../StateProvider';
import { useAuth } from '../../hooks/useAuth';
import User from './User';
import { actionTypes } from '../../reducer';
import Music from '../Music/Music';

export default function Navbar(){
  const [{basket, favorite},dispatch] = useStateValue();
const {logout} = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
     
    } catch (error) {
      console.error(error.message);
    }  
    dispatch({
      type:actionTypes.EMPTY_BASKET,
      basket: [],
      favorite: [],
    });
  }; 

  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='header'>
        <Toolbar>
        <Link to="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} className='navImage' alt='logo'/>
         
          </IconButton>  
</Link>
<Typography sx={{ flexGrow: 2 }} className="itemMenu">
        <Link to="/"> <Button className='menu'>Home</Button></Link>
        <Link to="/productos"> <Button className='menu'>Productos</Button></Link>
          </Typography> 
      <Button>   <Music/> </Button>
          <Typography sx={{ flexGrow: 1}} component="div" className="welcome">
         <h4>Welcome</h4> <User/>  
          </Typography> 
        
  
<Link to="/sign-in">
          <Button color="inherit" textDecoration="none" className='button' onClick={handleLogout}>{logout ? "Sign Out" : "Login"}</Button></Link>
          
  
     
      <Link to="/checkout-page">
        
          <IconButton aria-label='show cart items' color='inherit'>
            <Badge badgeContent={basket.length} color="secondary">
        <ShoppingCart fontSize="large" color=' rgb(8, 59, 82) !important' />
        </Badge>
        </IconButton>
</Link>
<Link to="/favorites">
<IconButton aria-label='show cart items' color='inherit'>
            <Badge badgeContent={favorite.length} color="secondary">
        <Favorite fontSize="large" color=' rgb(8, 59, 82) !important' />
        </Badge>
        </IconButton>
        </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
