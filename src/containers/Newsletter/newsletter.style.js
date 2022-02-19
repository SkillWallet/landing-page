import styled from "styled-components";

import bannerMoc from "common/assets/image/newsletter-bg.svg";

const NewsletterArea = styled.section`
  background-image: url(${bannerMoc.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  padding-top: 75px;
  padding-bottom: 55px;
  position: relative;
  @media (max-width: 575px) {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .Container {
    display: flex;
  }

  h2 {
    font-size: 3.5rem;
    letter-spacing: -2px;
    color: #fff;
    margin-bottom: 1.188rem;
  }
  p {
    color: #fff;
    max-width: 515px;
    margin-bottom: 2.188rem !important;
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

export default NewsletterArea;
