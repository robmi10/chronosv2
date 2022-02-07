import styled from 'styled-components'
import {NavLink as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: #fff;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;   
  
    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
        width: 10px
        position: sticky;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;   
        z-index: 10;   
        background: #fff;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    @media screen and (max-width: 768){
        background-color: #0000;
    }
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const img_icon = styled.img`
   height: 200px;
   width: 200px;
   
   margin-top: 20px;

    @media screen and (max-width: 768px){
        height: 50px;
        width: 50px;
        
        margin-top: 20px;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 500px;
    @media screen and (max-width: 768px){
        display: none;  
    }
`


export const NavItem = styled.li`
    height: 80px;
    margin-right: 40px;
    margin-top: 40px;
    color: #000;
    &.active {
    border-bottom: 10px solid #01bf71;
    color: #01bf71;
    }
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid blue ;
    }  
`

export const NavBtn  = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 780px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition:  all 0.2s ease-in-out;
        background: #fff;
        color: #101522;
    }
`