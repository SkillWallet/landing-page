import styled from "styled-components";

const HowItWorksArea = styled.section`
  padding-top: 75px;
  padding-bottom: 0px;

  .Container-bottom {
    padding-top: 120px;
  }
  @media (max-width: 1600px) {
    padding-top: 50px;
    padding-bottom: 70px;
  }
  @media (max-width: 575px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .align-right-wrapper {
    max-width: 28.221rem;
  }

  .left-column-right-align {
    display: flex;
    justify-content: flex-end;
  }
  p {
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.78;
    color: #000;
    margin-bottom: 0;
    + p {
      margin-top: 30px;
    }
  }
  .Left {
    h2 {
      font-weight: 500;
      font-size: 10.211rem;
      line-height: 1;
      letter-spacing: -0.02em;
      color: #000;
      max-width: 100px;
    }
  }

  .work-icons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .powered-by {
    display: flex;
    align-items: center;
    p {
      max-width: 100px;
    }
  }
  .icon-image {
    height: 4.299rem;
    width: auto !important;
  }

  @media (max-width: 991px) {
    .left-column-right-align {
      justify-content: center;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -40px;
  margin-right: -40px;
`;
export const Col = styled.div`
  padding-left: 40px;
  padding-right: 40px;

  flex: 0 0 50%;
  max-width: 50%;

  &.left-col {
    flex: 0 0 40%;
    max-width: 40%;
  }

  &.right-col {
    flex: 0 0 60%;
    max-width: 60%;
  }

  @media (max-width: 991px) {
    flex: 0 0 100%;
    max-width: 100%;

    &.left-col {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &.right-col {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
`;

export default HowItWorksArea;
