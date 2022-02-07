import styled from "styled-components"
import {Link} from "react-scroll"

export const Button = styled(Link)`
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

export const ButtonCart = styled(Link)`
    border-radius: 10px;
    position: absolute;
    margin-left: 230px;
    top: 350px;

    background: red;
    white-space: nowrap;
    padding: ${({big}) =>(big ? '14px 48px': '12px 30px')};
    color: #fff;
    height: 10px;
    width: 15px;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        height: 15px;
        width: 20px;
    }
`

export const ButtonCart2 = styled(Link)`
    margin-left: 10px;
    border-radius: 4px;
    background: blue;
    white-space: nowrap;
    padding: ${({big}) =>(big ? '14px 48px': '12px 30px')};
    color: #fff;
    height: 15px;
    width: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        height: 20px;
        width: 50px;
    }
`
