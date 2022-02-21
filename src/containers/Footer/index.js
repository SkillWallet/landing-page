import React from "react";
import Link from "next/link";
import NextImage from "common/components/NextImage";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterArea, { Left, CopyText, Social } from "./footer.style";
import { FooterData } from "common/data";

const Footer = () => {
  const { logo, social, copyright } = FooterData;

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo className="logo" href="/" logoSrc={logo} title="Skillwallet" />
        </Left>
        <CopyText>{copyright}</CopyText>
        <Social>
          {social.map(({ link, icon }, index) => (
            <Link href={link} key={`footer-social-key-${index}`}>
              <a target="_blank">
                <NextImage src={icon} alt="social image" />
              </a>
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
