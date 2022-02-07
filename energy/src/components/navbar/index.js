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
export const Navbar = ({toggle}) => {
    const { productcart, setProductcart } = useContext(Context);

    const { id_ } = useContext(Context);

    const { SideBarOpen, setSideBarOpen } = useContext(Context);

    const OpenSideBar = () =>{
        setSideBarOpen(true)
    }

    console.log("current page id -->",  id_)

    console.log("current cart length -->", productcart)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <div className="shopppingdiv"> 
                            <Links
                                    to="cart"
                                >     
                                <Badge badgeContent={productcart.total_items} color="primary">

                                <ShoppingCartIcon/> 
                                </Badge>
                            
                        </Links>
                    </div>

                    <NavLogo to="/">
                   
                        <MobileIcon onClick={toggle}> 
                        <FaBars color = "black"/>
                         </MobileIcon>
                         
                        <NavMenu>

                             <NavLinks
                        
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    > 
                        {/* <HomeIcon style={{height: "40px"}}/> */}
                        
                        <img className="navimg" src={chronos}></img>   
                   
                        </NavLinks>

                        

                        <NavLinks 
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}

                    > 
                        About
                  

                        </NavLinks >

                        <NavLinks
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                    > 

                                Services
                         
                        </NavLinks>

                        <NavLinks
                        
                        to="shop"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        exact= {true}
                        > 

                                   
                                Shop
                            
                            
                        </NavLinks>

                        </NavMenu>
                        <Links
                                    to="/cart"
                                > 
                        <NavBtn > 
                                   
                           
                                <Badge badgeContent={productcart.total_items} color="primary">

                                <ShoppingCartIcon/> 
                                </Badge>
                            
                        </NavBtn>

                        </Links>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
            
        </>
    )
}
