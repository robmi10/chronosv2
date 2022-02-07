import React, {useState, useContext} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { Navbar } from '../components/navbar/index';
import Sidebar from '../components/SideBar';
import { dataobject1, dataobject2, dataobject3, dataobject4} from '../components/InfoSection/data';
import Footer from '../components/Footer';
import Shop from '../components/Shop/Shop';
import Data from '../components/Data';
import { Context } from '../components/Context/Context';

export default function Home() {
    const [isOpen, setisOpen] = useState(false)
    
    const toggle = () =>{
        setisOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        
        <HeroSection ></HeroSection>
        <Navbar toggle = {toggle}/>
        <InfoSection {...dataobject1}/>
        <InfoSection {...dataobject2}/>
        <Shop {...dataobject3}/>
        <Footer/>
        </>
    )
}

