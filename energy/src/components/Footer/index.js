import React from 'react'
import {FootContainer, FootWrapper, FootLinksItem, FootLink, 
    FootLinksContainer, 
    FootLinksWrapper, 
    FootLinksTitle, Social, SocialIcon, SocialWrap, SocialLogo, DomainRight,SocialLink} from "./FooterElement"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, Falinkeding } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <FootContainer id ="footer">
            <FootWrapper> 
                <FootLinksContainer>
                    <FootLinksWrapper>
                        <FootLinksItem>
                            <FootLinksTitle> About us</FootLinksTitle>
                                <FootLink to =""> How it works</FootLink>
                                <FootLink to =""> Twitter</FootLink>
                                <FootLink to =""> Linkedin</FootLink>
                                <FootLink to =""> Careers</FootLink>
                                <FootLink to =""> Terms of Service</FootLink>
                        </FootLinksItem>

                        <FootLinksItem>
                            <FootLinksTitle> Social Media</FootLinksTitle>
                                <FootLink to =""> How it works</FootLink>
                                <FootLink to =""> Twitter</FootLink>
                                <FootLink to =""> Linkedin</FootLink>
                                <FootLink to =""> Careers</FootLink>
                                <FootLink to =""> Terms of Service</FootLink>
                        </FootLinksItem>
                    </FootLinksWrapper>

                    <FootLinksWrapper>
                        <FootLinksItem>
                            <FootLinksTitle> Contact</FootLinksTitle>
                                <FootLink to =""> How it works</FootLink>
                                <FootLink to =""> Twitter</FootLink>
                                <FootLink to =""> Linkedin</FootLink>
                                <FootLink to =""> Careers</FootLink>
                                <FootLink to =""> Terms of Service</FootLink>
                        </FootLinksItem>

                        <FootLinksItem>
                            <FootLinksTitle> Videos</FootLinksTitle>
                                <FootLink to =""> How it works</FootLink>
                                <FootLink to =""> Twitter</FootLink>
                                <FootLink to =""> Linkedin</FootLink>
                                <FootLink to =""> Careers</FootLink>
                                <FootLink to =""> Terms of Service</FootLink>
                        </FootLinksItem>
                    </FootLinksWrapper>
                </FootLinksContainer>
                <Social>
                        <SocialWrap>
                            <SocialLogo to="">
                                Energy
                            </SocialLogo>

                            <DomainRight>Energy © {new Date().getFullYear()}
                            All rights reserved.</DomainRight>

                            <SocialIcon>
                                <SocialLink href="/" target="_blank"
                                aria-label="Facebook"
                                >
                                    <FaFacebook/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Twitter"
                                >
                                    <FaTwitter/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Youtube"
                                >
                                    <FaYoutube/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialLink>
                            </SocialIcon>
                        </SocialWrap>
                    </Social>
            </FootWrapper>

                    
        </FootContainer> 
        </>
    )
}

export default Footer
