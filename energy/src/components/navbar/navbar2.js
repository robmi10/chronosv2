import React, {useContext} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItemContainer , NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from 'react-router-dom'
import "./navbar.css"
import chronos from "../../images/chronos.svg"
import { commerce } from '../Commerce/commerce';
import { Context } from '../Context/Context';
import Badge from '@mui/material/Badge';
import { Link as Links } from "react-router-dom";
export const Navbar2 = ({toggle}) => {
    const { productcart, setProductcart } = useContext(Context);

    const { id_ } = useContext(Context);


    console.log("current page id -->",  id_)


    console.log("current cart length -->", productcart)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                    <NavLink
                        
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    > 
                        {/* <HomeIcon style={{height: "40px"}}/> */}
                        
                        <img style = {{height: "200px", width: "200px", marginTop: "20px"}}src={chronos}></img>   
                   
                        </NavLink>
                      
                    </NavLogo>
                </NavbarContainer>
            </Nav>
            
        </>
    )
}
