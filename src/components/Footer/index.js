import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import {FooterContainer, FooterWrap, FooterLink,FooterLinksContainer,FooterLinksWrapper,
  FooterLinkItems,FooterLinkTitle,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,
  SocialIcons,SocialIconLink} from './FooterElements';

const Footer =() => {

    const toggleHome =()=>{
        scroll.scrollToTop();
    };


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Carreers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>

                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Carreers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>

                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Carreers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>

                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                
                                <FooterLink to="/signin"> How it works </FooterLink>
                                <FooterLink to="/signin"> Testimonials </FooterLink>
                                <FooterLink to="/signin"> Carreers </FooterLink>
                                <FooterLink to="/signin"> Investors </FooterLink>
                                <FooterLink to="/signin"> Terms of services </FooterLink>

                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>ADD2Code</SocialLogo>
                        <WebsiteRights> ADD2Code @ { new Date().getFullYear()}  All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" areal-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" areal-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" areal-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" areal-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" areal-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer