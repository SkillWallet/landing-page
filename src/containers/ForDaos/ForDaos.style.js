import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 5.438rem 0;
  overflow: hidden;
  background-color: #fff;

  .header {
    max-width: 95.688rem;
    text-align: center;
    width: 100%;
    margin: 0 auto 6.625rem auto;
  }
`;

export const DaoImageObject = styled.div`
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
  .dashboardWrapper {
    height: 100%;

    & > DIV {
      height: 100%;
    }
  }
`;

export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;

  // height: 50rem;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 767px) {
  }
`;

export const ForDaosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  position: relative;

  .dao-image {
    position: relative;

    .d-img img {
      // height: 50rem;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  .info {
    padding: 6.688rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 575px) {
      padding: 0;
    }

    .info-btn {
      margin-top: 4.188rem;
      min-width: auto;
      min-height: 3.25rem;
      text-transform: uppercase;
      font-size: 1.125rem;
    }
  }

  .bottom-part {
    margin-top: 10rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-caption {
    max-width: 28.125rem;
    text-align: left;
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 50%;

    h2 {
      color: white;
      font-size: 2.375rem;
      line-height: 1.7;
      font-weight: bold;
      margin: 0;
    }
  }
`;

export default SectionWrapper;
