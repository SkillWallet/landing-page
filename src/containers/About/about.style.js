import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const AboutWrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 240px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100%;
  position: relative;
  background-color: #fff;
  @media (max-width: 1800px) {
    padding-bottom: 180px;
  }
  @media (max-width: 1600px) {
    padding-top: 80px;
    padding-bottom: 160px;
  }
  @media (max-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 60px;
  }
  @media (max-width: 767px) {
    padding-top: 30px;
    padding-bottom: 20px;
    min-height: auto;
  }

  @media (min-width: 767px) {
    .descr-wrapper {
      margin-left: 100px;
    }
    .vertical {
      transform: rotate(-90deg);
      transform-origin: right top 0;
      right: 100%;
      color: #000;
      cursor: vertical-text;
      position: absolute;
      display: block;
      height: auto;
      direction: rtl;
      z-index: 11;
      width: 240px;
      text-align: end;
    }

    .wrapv {
      z-index: 5;
      position: absolute;
      display: block;
      top: 0px;
      left: 0px;
      height: 100%;
    }
  }

  @media only screen and (max-width: 480px) {
    background: none;
  }

  .row {
    position: relative;
    z-index: 1;
  }

  .person-icon {
    height: 5.625rem;
    width: 5.625rem;
    margin-bottom: 3.438rem;
  }

  .read-more-btn {
    margin-top: 4.188rem;
    min-width: auto;
    min-height: 3.25rem;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
`;

const AboutObject = styled.div`
  position: absolute;
  width: 45%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
  .AboutWrapper {
    height: 100%;

    & > DIV {
      height: 100%;
    }
  }
`;

export { AboutObject };

export default AboutWrapper;
