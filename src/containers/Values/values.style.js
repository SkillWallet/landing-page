import styled from "styled-components";

const ValuesArea = styled.section`
  padding: 75px 0;
  background: #000;

  .values {
    display: flex;
    min-height: 50px;
    align-items: center;
    line-height: 50px;
    color: #fff;
  }

  .values:first-child {
    min-height: auto;
    line-height: 50px;
    align-items: flex-end;
    border-bottom: 1px solid #fff;
  }

  .values .value {
    font-size: 10.211rem;
    font-weight: bold;
    line-height: 10.211rem;
    flex: 30%;
  }

  .values .values-text {
    display: flex;
    align-items: center;
    font-size: 1.938rem;
    flex: 75%;
  }

  .value-box {
    background: #fff;
    color: #000;
    margin-right: 8px;
    width: 25px;
    height: 25px;
    align-items: center;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .values .border-bottom-v {
    border-bottom: 1px solid #fff;
  }

  @media (max-width: 991px) {
    .values,
    .values:first-child {
      flex-direction: column;
      align-items: flex-start;
      border-bottom: none;
      .values-text {
        border-bottom: 1px solid #fff;
        width: 100%;
      }
    }
  }

  @media (max-width: 575px) {
    .values .values-text {
      line-height: 1.5;
    }
  }
`;

export default ValuesArea;
