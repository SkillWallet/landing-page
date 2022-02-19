import { BannerData } from "common/data";
import styled from "styled-components";
const BannerArea = styled.section`
  background-color: #fff;
  padding-top: 160px;
  padding-bottom: 0;
  position: relative;

  .Container {
    display: flex;
    margin-bottom: 14rem;
  }

  .main-logo {
    margin-bottom: 4.375rem;
    img {
      height: 5.313rem;
    }
  }

  @media (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 0;
  }
  @media (max-width: 575px) {
    padding-top: 100px;
    padding-bottom: 0;
    .Container {
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 2.813rem;
    letter-spacing: -2px;
    color: #000;
    margin-bottom: 1.188rem;
  }
  p {
    font-weight: normal;
    font-size: 1.188rem;
    line-height: 1.7;
    letter-spacing: 0;
    color: #000;
    margin-bottom: 0;
    max-width: 515px;
    opacity: 0.8;
    @media (max-width: 1600px) {
      max-width: 400px;
    }
  }

  .main-button {
    margin-top: 4.188rem;
    min-width: auto;
    min-height: 3.25rem;
    text-transform: uppercase;
    font-size: 1.125rem;

    + .main-button {
      margin-left: 16px;
    }
  }
`;

export const MarqueeWrapper = styled.div`
  background-color: #000;
  color: #fff;
  height: 18rem;
  max-height: 18rem;
  font-size: 1.438rem;
  padding: 2.063rem 0;
  position: relative;

  @media (max-width: 575px) {
    height: 9rem;
    max-height: 9rem;
  }
`;

export const FloatingWrapper = styled.div`
  padding: 20px;
  width: 30.153rem;
  height: 16.891rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  animation: bubbleTopBottom 5s linear infinite;
  z-index: 2;
  position: absolute;
  background: white;
  left: 100px;

  .sw-box-title {
    font-size: 17px;
    color: black;
  }

  img {
    height: 4.707rem;
  }

  .sw-box-subtitle {
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2.375rem;
  }

  @keyframes bubbleTopBottom {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(15px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 575px) {
    position: relative;
    margin: 0 auto;
    left: 0;
  }
`;

export const StatWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .stat {
    display: flex;
    .stat-amount {
      font-size: 2.811rem;
      font-weight: bold;
    }

    .stat-name {
      font-size: 1.813rem;
      font-weight: bold;
    }

    .stat-separator {
      background-color: #000;
      width: 0.824rem;
      margin-right: 1.563rem;
    }

    + .stat {
      margin-left: 7.875rem;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    margin-top: 20px;
    .stat {
      + .stat {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
`;
export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 767px) {
  }
`;

export default BannerArea;
