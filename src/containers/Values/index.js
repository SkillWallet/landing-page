import React from "react";
import Container from "common/components/UI/Container";
import ValuesArea from "./values.style";
import { ValuesData } from "common/data";

const Values = () => {
  const { items } = ValuesData;
  return (
    <ValuesArea>
      <Container className="Container">
        {items.map(({ text, title }, index) => (
          <div key={`value-key-${index}`} className="values">
            <div className="value">{title}</div>
            <div
              className={`values-text ${index > 0 ? "border-bottom-v" : ""}`}
            >
              <span className="value-box">0{index + 1}</span>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </Container>
    </ValuesArea>
  );
};

export default Values;
