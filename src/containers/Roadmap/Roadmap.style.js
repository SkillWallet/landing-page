import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SectionWrapper = styled.section`
  padding: 75px 0;
  overflow: hidden;
  background-color: #fff;

  .Container {
    margin-bottom: -100px;
    z-index: 28;
  }

  .section-banner {
    height: 27.458rem;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    .read-more-btn {
      margin-top: 4.188rem;
      min-width: auto;
      min-height: 3.25rem;
      text-transform: uppercase;
      font-size: 1.125rem;
    }
  }
`;

export const RoadmapWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: 38rem;
  > div {
    padding: 4rem;
    transition: all 0.3s;
    border-radius: 8px;

    // @media (max-width: 1600px) {
    //   padding: 40px 45px;
    // }
    // @media (max-width: 768px) {
    // }

    // @media (max-width: 575px) {
    // }
  }

  .feature__block {
    height: 100%;
    text-align: center;
    box-shadow: 5px 3px 12px 0 rgb(18 24 58 / 8%);
    background: #fff;
    .icon__wrapper {
      max-width: 115px;
      margin: 0 auto 25px;
      position: relative;
      @media only screen and (max-width: 1366px) {
        margin-bottom: 25px;
      }
      img {
        display: inline-block;
        @media only screen and (max-width: 1366px) {
          height: 90px;
        }
        @media only screen and (max-width: 767px) {
          height: 80px;
        }
      }
    }
    .content__wrapper {
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .content-descriptions {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      h3 {
        font-size: 1.431rem;
        line-height: 1.45;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        // color: ${themeGet("colors.white", "#FFFFFF")};
        font-size: 1.119rem;
        line-height: 1.9;
        padding: 0 15px;
        opacity: 0.7;
        @media (max-width: 1600px) {
          font-size: 15px;
        }
      }
    }
  }
`;

export default SectionWrapper;
