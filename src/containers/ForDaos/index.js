import React from "react";
import NextImage from "common/components/NextImage";
import SectionWrapper, { Col, ForDaosWrapper } from "./ForDaos.style";
import { ForDaosData } from "common/data";
import CardSlider from "common/components/CardSlider";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Link from "next/link";
import { LinkButton } from "common/components/Button";

const ForDaos = ({ row }) => {
  return (
    <SectionWrapper id="daos_section">
      <CardSlider>
        {ForDaosData.map((item, index) => (
          <ForDaosWrapper key={index}>
            <Box className="row" {...row}>
              <Col>
                <div className="dao-image">
                  <div className="image-caption">
                    <Text as="h2" content={item.imageTitle} />
                  </div>
                  <div className="d-img">
                    <NextImage src={item.image} alt="DaoImage" />
                  </div>
                </div>
              </Col>
              <Col>
                <div className="info">
                  <div>
                    <Text
                      as="p"
                      style={{
                        marginBottom: "1.875rem",
                      }}
                      fontSize="1.628rem"
                      content="For DAOs"
                    />
                    <Text as="h2" fontSize="2.811rem;" content={item.title} />
                  </div>

                  <div className="bottom-part">
                    {item.descriptions.map((desc, index) => (
                      <Text
                        key={`desc-key-${index}`}
                        as="p"
                        style={{
                          maxWidth: "32rem",
                        }}
                        fontSize="1.125rem;"
                        content={desc}
                      />
                    ))}

                    <Link href={item.button.link}>
                      <LinkButton
                        target="_blank"
                        href={item.button.link}
                        className="dark info-btn"
                        title={item.button.text}
                      />
                    </Link>
                  </div>
                </div>
              </Col>
            </Box>
          </ForDaosWrapper>
        ))}
      </CardSlider>
    </SectionWrapper>
  );
};
ForDaos.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
};

export default ForDaos;
