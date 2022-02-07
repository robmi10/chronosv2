import styled from "styled-components"
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroTextContainer = styled.div`
    border-radius: 10px;
    margin-bottom: 10px; 
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);};
`

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 999;
    @media screen and (max-width: 768px){
        padding: 100px 0;
        height: 850px;
    }   
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 780px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.h3`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 780px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
` 

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroBtn = styled.div`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#6C63FF': '#6C63FF')};
    white-space: nowrap;
    padding: ${({big}) =>(big ? '14px 48px': '12px 30px')};
    color: ${({darkTxt}) => (darkTxt ? '#101522' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) =>(primary ? '#6C63FF': '#fff')};
        color: ${({primary}) =>(primary ? '#fff': '#101522')};
        
        border-color: #101522;
    }

`

export const ArrowForwad = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

