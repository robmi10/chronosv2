import React, {useState, useEffect} from 'react'
import Video2 from '../../videos/video3.mp4'
import { HeroContainer, HeroBg, 
    VideoBg, HeroContent, HeroH1, 
    HeroP, HeroBtnWrapper, ArrowForwad, HeroBtn, ArrowRight, HeroTextContainer} from './HeroElements'
import {Button} from "../ButtonElements"
import { Link, animateScroll as scroll } from "react-scroll";

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src ={Video2} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroTextContainer> 
                <HeroH1>Chronos Nutrition</HeroH1>
                <HeroP>
                    Drink more to become healthier then before, the new way of living.
                </HeroP>
                </HeroTextContainer>
                <Link
                        activeClass="active"
                        to="shop"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        onClick={()=>{console.log("button on")}}
                    > 
                    <HeroBtn onMouseEnter={onHover} onMouseLeave={onHover}> 
                        Shop now { 
                            hover  ? <ArrowForwad/> : <ArrowRight/>
                        }
                    </HeroBtn>

                </Link>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
