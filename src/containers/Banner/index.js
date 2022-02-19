import React from "react";
import Link from "next/link";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import BannerArea, {
  Col,
  FloatingWrapper,
  MarqueeWrapper,
  StatWrapper,
} from "./banner.style";
import { BannerData } from "common/data";
import { LinkButton } from "common/components/Button";
import Marquee from "react-fast-marquee";
import Box from "common/components/Box";

const Banner = ({ row }) => {
  const {
    title,
    paragraphs,
    marqueeText,
    buttonLeft,
    buttonRight,
    competitionStart,
    stats,
    logo,
  } = BannerData;
  return (
    <>
      <BannerArea id="main_section">
        <Container className="Container">
          <Box className="row" {...row}>
            <Col>
              <div className="main-logo">
                <Image alt="skillwallet" src={logo.src} />
              </div>
              <Heading as="h2" content={title} />
              {paragraphs.map((text, index) => (
                <Text key={`paragraph-key-${index}`} as="p" content={text} />
              ))}
              <Link href={buttonLeft.link}>
                <LinkButton
                  href={buttonLeft.link}
                  target="_blank"
                  className="dark main-button"
                  title={buttonLeft.text}
                />
              </Link>
              <Link href={buttonRight.link}>
                <LinkButton
                  href={buttonRight.link}
                  target="_blank"
                  className="light main-button"
                  title={buttonRight.text}
                />
              </Link>
            </Col>
            <Col>
              <StatWrapper>
                {stats.map(({ num, name }, index) => (
                  <div className="stat" key={`stat-key-${index}`}>
                    <div className="stat-separator" />
                    <div className="stat-info">
                      <div className="stat-amount">{num || "N/A"}</div>
                      <div className="stat-name">{name}</div>
                    </div>
                  </div>
                ))}
              </StatWrapper>
              <FloatingWrapper className="join-comminity-left-days">
                <span className="sw-box-title">{competitionStart.title}</span>
                <div className="sw-box-subtitle">
                  <span>{competitionStart.date}</span>
                  <Image
                    src={competitionStart.timerIcon.src}
                    alt="bubble image"
                    className="bubble-image"
                    tyle="height: 90%;"
                  />
                </div>
              </FloatingWrapper>
            </Col>
          </Box>
        </Container>
        <MarqueeWrapper>
          <Marquee gradientWidth={0} speed={50}>
            {Array(4).fill(marqueeText.toUpperCase()).join(" / ")}
          </Marquee>
        </MarqueeWrapper>
      </BannerArea>
    </>
  );
};

Banner.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    width: "100%",
  },
};

export default Banner;
