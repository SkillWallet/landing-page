import styled from "styled-components";

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

export const MemberCardWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(31.827rem, 1fr));
  grid-template-rows: 30rem;
  > div {
    padding: 4rem;
    transition: all 0.3s;
    border-radius: 8px;
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
        align-items: center;
      }
      h3 {
        font-size: 1.431rem;
        line-height: 1;
        font-weight: normal;
        margin-bottom: 10px;
      }
      p {
        line-height: 1.9;
        padding: 0 15px;
        opacity: 0.7;
      }
    }
  }
`;

export default SectionWrapper;
