import styled from "styled-components"
import {Link as LinkS} from "react-scroll"

export const FootContainer = styled.div`
    background-color: #101522;
`

export const FootWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FootLinksContainer = styled.div`
    display: flex;
    justify-content: center; 
    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FootLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FootLinksItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`

export const FootLinksTitle = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FootLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
   
    &:hover{
        color: #01bf71;
        transition: ease-in-out;
    }

`

export const Social = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(LinkS)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const DomainRight = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const SocialIcon = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24px;
`

export const SocialLink = styled.a`
    color: #fff;
    font-size: 24px;
`