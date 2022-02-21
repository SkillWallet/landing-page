import React from "react";
import Banner from "containers/Banner";
import MainWrapper from "./_main_wrapper";
import Values from "containers/Values";
import Newsletter from "containers/Newsletter";
import ForDaos from "containers/ForDaos";
import ForMembers from "containers/ForMembers";
import HowItWorks from "containers/HowItWorks";
import About from "containers/About";
import Roadmap from "containers/Roadmap";

const Main = () => {
  return (
    <MainWrapper>
      <Banner />
      <About />
      <Values />
      <Newsletter />
      <ForDaos />
      <ForMembers />
      <HowItWorks />
      <Roadmap />
    </MainWrapper>
  );
};
export default Main;
