import React from "react";
// import {
//   FaFacebook,
//   ,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaAdobe,
  FaLinkedin,
  FaInstagram,
  FaMagento,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> Biography</FooterLinkTitle>

            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> &nbsp; Education  &nbsp; &nbsp;</FooterLinkTitle>

            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle> &nbsp;  &nbsp; Projects</FooterLinkTitle>

            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle> &nbsp; Awards</FooterLinkTitle>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Past Office </FooterLinkTitle>
            </FooterLinksItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>

            <WebsiteRight
              href="www.brighterdayscodelab.com.ng"
              target="new page"
            >
              Developed by CodeLab 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/groups/brighterdayscodelab"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
