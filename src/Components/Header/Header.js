import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png';
import './Header.css';
// imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';

const Header = () => {
    return (
        <div>
            <div className = "header-1">
            <img src={logo} alt="logo"/>
            {/* <input  className = "search-bar" type="text" placeholder = "search your destination" /> */}

            <TextField className = "search-bar"
                label="Search your destination"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
            />
            <div className = "header-2">
            <Link className = "header-link">News</Link>
            <Link className = "header-link">Destination</Link>
            <Link className = "header-link">Blog</Link>
            <Link className = "header-link">Contact</Link>
            <Link to = "/SignUp">
            <button  className= "btn-warning logIn-button">LogIn</button>
            </Link>
            </div>
            </div>           
            
       </div>
    );
};

export default Header;