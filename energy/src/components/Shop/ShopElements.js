import styled from "styled-components"
import {Link as LinkR} from 'react-router-dom'
import {Link} from 'react-scroll'

export const ShopContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({light}) => (light ? '#f9f9f9' : '#101522')};
    @media screen and (max-width: 768px){
        padding: 100px 0;
        height: auto;
    }   
`
export const ShopWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ShopCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: auto;
    width: auto;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ShopHeader = styled.h1`
    font-size: 1.6rem;
    color: #000;
    margin-bottom: 20px;
`
export const ShopH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ShopP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const ShopImage = styled.img`
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    height: auto;
    width: auto;
`


export const ShopBuyButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) =>(big ? '14px 48px': '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`

export const ShopSellButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) =>(big ? '14px 48px': '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`