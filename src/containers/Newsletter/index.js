import React from "react";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import NewsletterArea, { Col } from "./newsletter.style";
import Box from "common/components/Box";
import NewsletterForm from "common/components/NewsletterForm/NewsletterForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Text from "common/components/Text";
import { NewsLetterData } from "common/data";

const Newsletter = ({ row }) => {
  const { title, description, mailchimpUrl } = NewsLetterData;
  return (
    <>
      <NewsletterArea id="newsletter_section">
        <Container className="Container">
          <Box className="row" {...row}>
            <Col>
              <Heading as="h2" color="white" content={title} />
              <Text
                maxWidth="30rem"
                lineHeight="1.7"
                fontSize="1.188rem"
                content={description}
              />
              <MailchimpSubscribe
                url={mailchimpUrl}
                render={(props) => {
                  const { subscribe, status, message } = props || {};
                  return (
                    <NewsletterForm
                      status={status}
                      message={message}
                      onValidated={(formData) => subscribe(formData)}
                    />
                  );
                }}
              />
            </Col>
          </Box>
        </Container>
      </NewsletterArea>
    </>
  );
};

Newsletter.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    width: "100%",
  },
};

export default Newsletter;
