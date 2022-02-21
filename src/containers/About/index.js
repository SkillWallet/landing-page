import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import AboutWrapper, { AboutObject } from "./about.style";
import { LinkButton } from "common/components/Button";
import Link from "next/link";
import { AboutData } from "common/data";

const About = ({ row, col }) => {
  const { title, description, rightImage, personLogo, button } = AboutData;
  return (
    <AboutWrapper id="about_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <div>
              <div className="wrapv">
                <Heading
                  className="dash-header vertical"
                  content={title}
                  fontSize="2.811rem"
                />
              </div>
              <div className="descr-wrapper">
                <div className="person-icon">
                  <NextImage src={personLogo} />
                </div>
                <Text
                  maxWidth="30rem"
                  lineHeight="1.7"
                  fontSize="1.125rem"
                  content={description}
                />
                <Link href={button.link}>
                  <LinkButton
                    target="_blank"
                    href={button.link}
                    className="dark read-more-btn"
                    title={button.text}
                  />
                </Link>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
      <AboutObject>
        <div className="AboutWrapper">
          <NextImage src={rightImage} alt="AboutObject1" />
        </div>
      </AboutObject>
    </AboutWrapper>
  );
};

About.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
};

About.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, "70%", "50%", "45%"],
  },
};

export default About;
