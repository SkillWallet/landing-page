import React from "react";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./Roadmap.style";
import { RoadmapData } from "common/data";
import { SectionHeader } from "containers/app.style";

const Roadmap = () => {
  const { title, mainDescription, roadmapItems } = RoadmapData;

  const wrapDescription = (description) => {
    if (description?.includes("&")) {
      const [left, right] = description.split("&");
      return (
        <>
          {left} <br /> & {right}{" "}
        </>
      );
    }
    return description;
  };

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
            content={mainDescription}
          />
          <Heading
            as="h1"
            content={title}
            fontWeight="bold"
            fontSize="2.811rem"
          />
        </SectionHeader>

        <div className="roadmap-all">
          <div className="roadmap-wrap roadmap-wrap-done roadmap-wrap-s1 roadmap-wrap-s1-alt mb-0 ml-0">
            <div className="row no-gutters">
              {roadmapItems.pastActions.map(({ title, description }, index) => (
                <div key={`roadmap-past-key-${index}`} className="col-lg">
                  <div className="roadmap roadmap-s1 roadmap-s1-alt roadmap-done text-lg-center">
                    <div className="roadmap-step roadmap-step-s1">
                      <div className="roadmap-head roadmap-head-s1">
                        <span className="roadmap-time roadmap-time-s1">
                          {title}
                        </span>
                        <span className="roadmap-title roadmap-title-s1">
                          {wrapDescription(description)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="roadmap-wrap roadmap-wrap-s1 roadmap-wrap-s1-alt mb-0 ml-0">
            <div className="row flex-row-reverse no-gutters">
              {roadmapItems.futureAtions.map(
                ({ title, description, isCurrent, isComplete }, index) => (
                  <div key={`roadmap-future-key-${index}`} className="col-lg">
                    <div
                      className={`${isCurrent ? "roadmap-current" : ""} ${
                        isComplete ? "roadmap-done" : ""
                      } roadmap roadmap-s1 roadmap-s1-alt text-lg-center`}
                    >
                      <div className="roadmap-step roadmap-step-s1">
                        <div className="roadmap-head roadmap-head-s1">
                          <span className="roadmap-time roadmap-time-s1">
                            {title}
                          </span>
                          <span className="roadmap-title roadmap-title-s1">
                            {wrapDescription(description)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Roadmap;
