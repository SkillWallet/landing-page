import React from "react";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import HowItWorksArea, { Row, Col } from "./HowItWorks.style";
import { HowItWorksData } from "common/data";
import { SectionHeader } from "containers/app.style";
import NextImage from "common/components/NextImage";

const HowItWorks = () => {
  const { title, descriptions, descriptionTitle, partners, poweredBy, bottom } =
    HowItWorksData;
  return (
    <HowItWorksArea>
      <Container className="Container">
        <Row>
          <Col className="left-col">
            <Box className="Left">
              <Heading fontSize="10.211rem" as="h2" content={title} />
            </Box>
          </Col>
          <Col className="right-col">
            <Heading
              as="h1"
              content={descriptionTitle}
              fontWeight="bold"
              fontSize="1.438rem"
            />
            <Box className="Right ">
              {descriptions.map((text, index) => (
                <Text
                  as="p"
                  key={`how-it-works-text-key-${index}`}
                  content={text}
                />
              ))}
            </Box>
            <div className="work-icons">
              <NextImage objectFit="contain" src={partners.icon} />
              <div className="powered-by">
                <Text as="p" content={poweredBy.text} />
                <NextImage objectFit="contain" src={poweredBy.icon} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Container-bottom">
        <SectionHeader className="text-white">
          <Heading
            as="h1"
            content={bottom.title}
            fontWeight="bold"
            fontSize="2.811rem"
            maxWidth="400px"
            margin="0 auto"
          />
        </SectionHeader>
        <Row>
          <Col>
            <Box className="Left left-column-right-align">
              <div className="align-right-wrapper">
                <Heading
                  as="h1"
                  content={bottom.descriptionTitle}
                  fontWeight="bold"
                  fontSize="1.438rem"
                />
                <Text as="p" content={bottom.description} />
              </div>
            </Box>
          </Col>
          <Col>
            <Box className="Right">
              <NextImage objectFit="contain" src={bottom.image} />
            </Box>
          </Col>
        </Row>
      </Container>
    </HowItWorksArea>
  );
};

export default HowItWorks;
