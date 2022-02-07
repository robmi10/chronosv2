import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements'

export default function Sidebar({isOpen, toggle}) {
    console.log("isOpen sidebar", isOpen)
    return (
        <SidebarContainer isOpen= {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to="about"
                    onClick={toggle}
                    >
                        About
                    </SidebarLink>

                    <SidebarLink 
                    to="services"
                    onClick={toggle}
                    >
                        Services
                    </SidebarLink>

                    <SidebarLink 
                    to="shop"
                    onClick={toggle}
                    >
                        Shop
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute style={{background: "#6C63FF", color: "#fff"}} 
                    to="home"
                    onClick={toggle}
                    >Home</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
            
        </SidebarContainer>
    )
}
