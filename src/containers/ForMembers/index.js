import React from "react";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, { MemberCardWrapper } from "./ForMembers.style";
import { ForMembersData } from "common/data";
import { SectionHeader } from "containers/app.style";
import Link from "next/link";
import { LinkButton } from "common/components/Button";

const ForMembers = () => {
  const { title, description, items, button } = ForMembersData;

  return (
    <SectionWrapper id="members_section">
      <Container className="Container">
        <SectionHeader className="text-white">
          <Text
            as="p"
            style={{
              marginBottom: "1.875rem",
            }}
            fontSize="1.628rem"
            content={description}
          />
          <Heading
            as="h1"
            content={title}
            fontWeight="bold"
            fontSize="2.811rem"
          />
        </SectionHeader>
        <MemberCardWrapper>
          {items.map((item) => (
            <FeatureBlock
              key={`feature-key${item.id}`}
              title={<Heading as="h3" content={item.title} />}
              description={
                <div className="content-descriptions">
                  {item.descriptions.map((desc, index) => (
                    <Text
                      key={index}
                      as="p"
                      style={{
                        maxWidth: "32rem",
                      }}
                      dangerouslySetInnerHTML={{ __html: desc }}
                      fontSize="1.125rem;"
                    />
                  ))}
                </div>
              }
            />
          ))}
        </MemberCardWrapper>
      </Container>
      <div className="section-banner">
        <Link href={button.link}>
          <LinkButton
            href={button.link}
            target="_blank"
            className="light read-more-btn"
            title={button.text}
          />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ForMembers;
